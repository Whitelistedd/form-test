import { SexEnum } from "@/data/sex";
import {
  Control,
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormClearErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export interface FormContextType {
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<FormFields>;
  control: Control<FormFields> | undefined;
  fields: FieldArrayWithId<FormFields, never, "id">[] | null;
  register: UseFormRegister<FormFields> | (() => void);
  watch: UseFormWatch<FormFields> | ((fieldName?: string) => void);
  reset: UseFormReset<FormFields> | (() => void);
  handleSubmit: UseFormHandleSubmit<FormFields>;
  clearErrors: UseFormClearErrors<FormFields> | null;
  errors: FieldErrors<FormFields> | null;
  setValue: UseFormSetValue<FormFields> | null;
}

export type FormFields = {
  phone_number: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: SexEnum;
  advantages: string[];
  checkbox: number[];
  radio: string;
  aboutMe: string;
};
