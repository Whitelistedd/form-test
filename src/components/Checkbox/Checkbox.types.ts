import { FormFields } from "@/Contexts/FormProvider/FormProvider.types";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: UseFormRegister<FormFields> | (() => void);
  rules?: RegisterOptions<FormFields>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  error?: string;
  name: any;
}
