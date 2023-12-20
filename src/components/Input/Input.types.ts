import { TFormFields } from "@/Contexts/FormProvider/FormProvider.types";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<TFormFields> | (() => void);
  rules?: RegisterOptions<TFormFields>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  error?: string;
}
