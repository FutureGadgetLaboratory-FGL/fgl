"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import formSchema from "@/schemas/user";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  validatePassword,
} from "firebase/auth";
import { auth } from "../firebase/firebaseconfig.ts";
import { useState, useEffect } from "react";
import { PasswordRequirement } from "./PasswordRequirement.tsx";

export function RegisterForm() {
  const [password, setPassword] = useState("");
  const [passwordLengthReq, setPasswordLengthReq] = useState(false);
  const [passwordDigitReq, setPasswordDigitReq] = useState(false);
  const [passwordSpecialCharReq, setPasswordSpecialCharReq] = useState(false);
  const [passwordUppercaseReq, setPasswordUppercaseReq] = useState(false);
  const [passwordLowercaseReq, setPasswordLowercaseReq] = useState(false);
  const [clientSidePasswordIsValid, setClientSidePasswordIsValid] =
    useState(false);

  const passwordRequirementValidation = (password: string) => {
    setPasswordLengthReq(password.length >= 8);
    setPasswordDigitReq(/\d/.test(password));
    setPasswordSpecialCharReq(/[^a-zA-Z0-9]/.test(password));
    setPasswordUppercaseReq(/[A-Z]/.test(password));
    setPasswordLowercaseReq(/[a-z]/.test(password));
    setClientSidePasswordIsValid(
      passwordLengthReq &&
        passwordDigitReq &&
        passwordSpecialCharReq &&
        passwordUppercaseReq &&
        passwordLowercaseReq
    );
  };

  useEffect(() => {
    passwordRequirementValidation(password);
  }, [password]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (values && clientSidePasswordIsValid) {
      const status = await validatePassword(auth, values.password);
      if (!status) {
        console.log("Password does not meet the requirements");
        return;
      }
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: values.name,
          });
          console.log(user);
        })
        .catch((error: any) => {
          if (error.code === "auth/password-does-not-meet-requirements") {
            form.setError("password", {
              type: "manual",
              message: "Password does not meet the requirements",
            });
          } else {
            console.error("Error creating user:", error);
          }
        });
    }

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input placeholder="Enter your email" {...field} />
                  <Button type="button" className="mr-2">
                    Verify Email
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                Email verification is optional but recommended.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <div className="flex-col gap-2">
                <PasswordRequirement
                  id="term1"
                  title={"Password must be at least 8 characters long."}
                  isChecked={passwordLengthReq}
                />
                <PasswordRequirement
                  id="term2"
                  title={"Password must contain a digit."}
                  isChecked={passwordDigitReq}
                />
                <PasswordRequirement
                  id="term3"
                  title={"Password must contain a special character."}
                  isChecked={passwordSpecialCharReq}
                />
                <PasswordRequirement
                  id="term4"
                  title={"Password must contain an uppercase letter."}
                  isChecked={passwordUppercaseReq}
                />
                <PasswordRequirement
                  id="term5"
                  title={"Password must contain a lowercase letter."}
                  isChecked={passwordLowercaseReq}
                />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
