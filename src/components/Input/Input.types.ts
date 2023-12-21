import { FormFields } from "@/Contexts/FormProvider/FormProvider.types";
import { TextareaHTMLAttributes } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputProps {
  label?: string;
  register: UseFormRegister<FormFields> | (() => void);
  rules?: RegisterOptions<FormFields>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  error?: string;
  name: any;
  textArea?: boolean;
  className?: string;
  placeholder?: string;
  id?: string;
}
