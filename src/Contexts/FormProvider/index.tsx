"use client";

import { SexEnum } from "@/data/sex";
import { FormContextType, FormFields } from "./FormProvider.types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Form, useFieldArray, useForm } from "react-hook-form";

export const FormContext = createContext<FormContextType>({
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
  } = useForm<FormFields>({
    mode: "onChange",
    defaultValues: {
      phone_number: "",
      email: "",
      nickname: "",
      name: "",
      surname: "",
      sex: SexEnum.man,
      advantages: [],
      checkbox: [],
      radio: "",
      aboutMe: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages" as never,
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
