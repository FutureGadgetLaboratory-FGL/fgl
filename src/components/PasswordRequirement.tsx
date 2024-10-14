import { Checkbox } from "@/components/ui/checkbox"

interface PasswordRequirementProps {
  id: string;
  title: string;
  isChecked: boolean;
}

export function PasswordRequirement({id, title, isChecked }: PasswordRequirementProps) {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <Checkbox id={id} aria-readonly aria-checked = {isChecked} checked={isChecked} disabled />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  )
}
