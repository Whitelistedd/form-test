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

export interface IFormContext {
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<TFormFields, "advantages">;
  control: Control<TFormFields> | undefined;
  fields: FieldArrayWithId<TFormFields, "advantages", "id">[] | null;
  register: UseFormRegister<TFormFields> | (() => void);
  watch: UseFormWatch<TFormFields> | ((fieldName?: string) => void);
  reset: UseFormReset<TFormFields> | (() => void);
  handleSubmit: UseFormHandleSubmit<TFormFields>;
  clearErrors: UseFormClearErrors<TFormFields> | null;
  errors: FieldErrors<TFormFields> | null;
  setValue: UseFormSetValue<TFormFields> | null;
}

export type TFormFields = {
  phone_number: "";
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: 0 | 1;
  advantages: {
    id: string;
    advantage: string;
  }[];
  checkboxGroup: string;
  radioGroup: string;
  aboutMe: string;
};
