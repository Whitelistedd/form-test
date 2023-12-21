"use client";

import { Button } from "@/components/Button";
import styles from "./step3.module.scss";
import { Modal } from "@/components/Modal";
import SuccessSVG from "@/assets/svg/success.svg";
import ErrorSVG from "@/assets/svg/error.svg";
import CloseSVG from "@/assets/svg/close.svg";

import { Input } from "@/components/Input";
import { FormContext } from "@/Contexts/FormProvider";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ProgressBar } from "@/components/ProgressBar";
import { useRouter } from "next/navigation";
import { FormFields } from "@/Contexts/FormProvider/FormProvider.types";
import Image from "next/image";

export default function Step3() {
  const { register, watch, handleSubmit, errors } = useContext(FormContext);
  const router = useRouter();
  const [modalStatus, setModalStatus] = useState<"success" | "error" | "">("");

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };

  useEffect(() => {
    const values = watch();
    const checkboxesChecked = values?.checkbox?.find((checkbox) => checkbox);
    if (!checkboxesChecked) router.push("/");
  }, [watch, router]);

  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <ProgressBar currentStep={3} steps={3} />
        <div className={styles.inputs}>
          <Input
            rules={{ required: "Обязательное поле" }}
            label="О себе"
            textArea
            name="aboutMe"
            register={register}
            id="field-about"
            error={errors?.aboutMe?.message}
          />
        </div>
        <div className={styles.buttons}>
          <Link href={"/step2"}>
            <Button id="button-back" variant={2}>
              Назад
            </Button>
          </Link>
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            id="button-send"
            variant={1}
          >
            Отправить
          </Button>
        </div>
      </div>
      {modalStatus === "success" && (
        <Modal>
          <div className={styles.modal}>
            <h3 className={styles.modal__success_title}>
              Форма успешно отправлена
            </h3>
            <Image
              width={64}
              height={64}
              alt="success-image"
              src={SuccessSVG}
            />
            <Link href={"/"}>
              <Button id="button-to-main">На главную</Button>
            </Link>
          </div>
        </Modal>
      )}
      {modalStatus === "error" && (
        <Modal modalWrapProps={{ className: styles.modal }}>
          <div className={styles.modal__wrap}>
            <div className={styles.modal__top}>
              <h3 className={styles.modal__error_title}>Ошибка</h3>
              <Image
                onClick={() => setModalStatus("")}
                className={styles.modal__close}
                width={28}
                height={28}
                alt="close-image"
                src={CloseSVG}
              />
            </div>
            <Image width={64} height={64} alt="error-image" src={ErrorSVG} />
            <Link className={styles.modal__close_button} href={"/"}>
              <Button onClick={() => setModalStatus("")} id="button-close">
                Закрыть
              </Button>
            </Link>
          </div>
        </Modal>
      )}
    </main>
  );
}
