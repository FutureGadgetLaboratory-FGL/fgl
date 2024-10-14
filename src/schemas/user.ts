import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const lowercaseRegex = /(?=.*[a-z])/; // At least one lowercase letter
const uppercaseRegex = /(?=.*[A-Z])/; // At least one uppercase letter
const digitRegex = /(?=.*\d)/; // At least one digit
const specialCharRegex = /(?=.*[^a-zA-Z0-9])/; // At least one special character

const passwordRegex = new RegExp(
  lowercaseRegex.source + uppercaseRegex.source + digitRegex.source + specialCharRegex.source
); // Combine all regexes

const registerFormSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email().regex(emailRegex, "Invalid email format"),
  password: z.string().min(8).regex(passwordRegex, "Password must include at least one digit, one lowercase letter, one uppercase letter, and one special character"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Set the path of the error to the confirmPassword field
});

export default registerFormSchema;