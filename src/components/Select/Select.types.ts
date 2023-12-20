import { FormFields } from "@/Contexts/FormProvider/FormProvider.types";
import { Control, RegisterOptions } from "react-hook-form";

export interface SelectProps {
  name: any;
  control: Control<FormFields> | undefined;
  options: (React.HTMLAttributes<HTMLSpanElement> & {
    itemId: number | string;
    name: string;
    value?: any;
  })[];
  label?: string;
  error?: string;
  rules?: RegisterOptions<FormFields, any>;
}
