"use client";

import { IFormContext, TFormFields } from "./FormProvider.types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Form, useFieldArray, useForm } from "react-hook-form";

export const FormContext = createContext<IFormContext>({
  remove: () => {},
  append: () => {},
  control: undefined,
  fields: [],
  register: () => {},
  watch: (fieldName?: string) => {},
  reset: () => {},
  handleSubmit: () => async () => {},
  clearErrors: () => {},
  errors: null,
  setValue: null,
});

export function FormProvider({ children }: { children: ReactNode }) {
  const {
    control,
    register,
    setValue,
    watch,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<TFormFields>({
    defaultValues: {
      phone_number: "",
      email: "",
      nickname: "",
      first_name: "",
      last_name: "",
      gender: "",
      advantages: [],
      checkboxGroup: "",
      radioGroup: "",
      aboutMe: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });

  if (!register) return;

  const value = {
    fields,
    append,
    remove,
    control,
    register,
    setValue,
    watch,
    reset,
    handleSubmit,
    clearErrors,
    errors,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export const useDataContext = () => useContext(FormContext);
