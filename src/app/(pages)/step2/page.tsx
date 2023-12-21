"use client";

import { Button } from "@/components/Button";
import styles from "./step2.module.scss";

import { Input } from "@/components/Input";
import { FormContext } from "@/Contexts/FormProvider";
import { useContext, useEffect } from "react";
import { Select } from "@/components/Select";
import Link from "next/link";
import { ProgressBar } from "@/components/ProgressBar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TrashSVG from "@/assets/svg/trash.svg";
import PlusSVG from "@/assets/svg/plus.svg";
import { Checkbox } from "@/components/Checkbox";

export default function Step2() {
  const {
    register,
    watch,
    handleSubmit,
    errors,
    control,
    fields,
    append,
    remove,
    setValue,
  } = useContext(FormContext);
  const router = useRouter();

  const onSubmit = () => {
    router.push("/step3");
  };

  const addInput = () => {
    append(` `);
  };

  const values = watch();

  console.log(values);

  useEffect(() => {
    if (!values?.nickname && !values?.name && !values?.surname && !values?.sex)
      router.push("/");
  }, [values, router]);

  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <ProgressBar currentStep={2} steps={3} />
        <div className={styles.inputs}>
          <span>Преимущества</span>
          {fields?.map((field, index) => {
            return (
              <div key={field.id} className={styles.input_container}>
                <Input
                  labelProps={{
                    className: styles.input_container__advantage_input,
                  }}
                  id={`field-advatages-${index + 1}`}
                  name={`advantages[${index}]`}
                  register={register}
                  error={errors?.advantages?.[index]?.message}
                  rules={{
                    required: "Обязательное поле",
                    pattern: {
                      value: /^(?!\s$).*/,
                      message: "Обязательное поле",
                    },
                  }}
                />
                <button className={styles.input_container__trash_button}>
                  <Image
                    id={`button-remove-${index + 1}`}
                    onClick={() => remove(index)}
                    src={TrashSVG}
                    width={20}
                    height={20}
                    alt="trash-button"
                  />
                </button>
              </div>
            );
          })}
          <Button
            id="button:add"
            className={styles.add_input_button}
            variant={2}
            onClick={() => addInput()}
          >
            <Image
              className={styles.input_container__trash_button}
              src={PlusSVG}
              width={20}
              height={20}
              alt="plus-button"
            />
          </Button>
        </div>
        <div className={styles.checkboxes}>
          <span>Checkbox группа</span>
          <Checkbox
            id="field-checkbox-group-option-1"
            label="1"
            name="checkbox[0]"
            register={register}
          />
          <Checkbox
            id="field-checkbox-group-option-2"
            label="2"
            name="checkbox[1]"
            register={register}
          />
          <Checkbox
            id="field-checkbox-group-option-3"
            label="3"
            name="checkbox[2]"
            register={register}
          />
        </div>
        <div className={styles.buttons}>
          <Link href={"/step1"}>
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
