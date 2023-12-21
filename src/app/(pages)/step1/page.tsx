"use client";

import { Button } from "@/components/Button";
import styles from "./step1.module.scss";

import { Input } from "@/components/Input";
import { FormContext } from "@/Contexts/FormProvider";
import { useContext, useEffect } from "react";
import { Select } from "@/components/Select";
import Link from "next/link";
import { ProgressBar } from "@/components/ProgressBar";
import { useRouter } from "next/navigation";
import { SexEnum } from "@/data/sex";

export default function Step1() {
  const { register, watch, handleSubmit, errors, control } =
    useContext(FormContext);
  const router = useRouter();

  const onSubmit = () => {
    router.push("/step2");
  };

  useEffect(() => {
    const values = watch();
    if (!values?.email && !values?.phone_number) router.push("/");
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <ProgressBar currentStep={1} steps={3} />
        <div className={styles.inputs}>
          <Input
            id="field-nickname"
            label="Никнейм"
            name="nickname"
            rules={{
              maxLength: { value: 30, message: "Никнейм слишком длинный" },
              required: "Обязательное поле",
              pattern: {
                value: /^[a-zA-ZА-Яа-я0-9]+$/g,
                message: "Символы запрещены",
              },
            }}
            register={register}
            error={errors?.nickname?.message}
          />
          <Input
            id="field-name"
            label="Имя"
            name="name"
            rules={{
              maxLength: { value: 50, message: "Имя слишком длинное" },
              required: "Обязательное поле",
              pattern: {
                value: /^[a-zA-ZА-Яа-я]+$/g,
                message: "Символы запрещены",
              },
            }}
            register={register}
            error={errors?.name?.message}
          />
          <Input
            id="field-surname"
            label="Фамилия"
            name="surname"
            rules={{
              maxLength: { value: 50, message: "Фамилия слишком длинное" },
              required: "Обязательное поле",
              pattern: {
                value: /^[a-zA-ZА-Яа-я]+$/g,
                message: "Символы запрещены",
              },
            }}
            register={register}
            error={errors?.surname?.message}
          />
          <Select
            control={control}
            options={[
              {
                itemId: 1,
                id: "field-sex-option-man",
                name: "мужской",
                value: SexEnum.man,
              },
              {
                itemId: 2,
                id: "field-sex-option-woman",
                name: "женский",
                value: SexEnum.woman,
              },
            ]}
            name="sex"
            label="Пол"
            rules={{ required: "Обязательное поле" }}
            error={errors?.sex?.message}
          />
        </div>
        <div className={styles.buttons}>
          <Link href={"/"}>
            <Button id="button-back" variant={2}>
              Назад
            </Button>
          </Link>
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            id="button-next"
            variant={1}
          >
            Далее
          </Button>
        </div>
      </div>
    </main>
  );
}
