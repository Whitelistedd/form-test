"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import ProfileImageSRC from "@/assets/svg/profile-image.svg";

import Folder from "@/assets/svg/folder.svg";
import { Input } from "@/components/Input";
import { FormContext } from "@/Contexts/FormProvider";
import { useContext } from "react";
import { Button } from "@/components/Button";

export default function Home() {
  const { register, watch, handleSubmit } = useContext(FormContext);

  const onSubmit = () => {
    console.log("w");
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <div className={styles.user_info}>
          <Image
            className={styles.user_info__profile_image}
            src={ProfileImageSRC}
            width={80}
            height={80}
            alt="profile-picture"
          />
          <div className={styles.user_info__details}>
            <span className={styles.user_info__name}>Алексей Иванов</span>
            <ul className={styles.user_info__social_list}>
              <li className={styles.user_info__social_item}>
                <a className={styles.user_info__social_anchor}>
                  <Image
                    src={Folder}
                    width={16}
                    height={16}
                    alt="folder-image"
                  />
                  <span className={styles.user_info__social_item__name}>
                    Telegram
                  </span>
                </a>
              </li>
              <li className={styles.user_info__social_item}>
                <a className={styles.user_info__social_anchor}>
                  <Image
                    src={Folder}
                    width={16}
                    height={16}
                    alt="folder-image"
                  />
                  <span className={styles.user_info__social_item__name}>
                    GitHub
                  </span>
                </a>
              </li>
              <li className={styles.user_info__social_item}>
                <a className={styles.user_info__social_anchor}>
                  <Image
                    src={Folder}
                    width={16}
                    height={16}
                    alt="folder-image"
                  />
                  <span className={styles.user_info__social_item__name}>
                    Резюме
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.inputs}>
          <Input
            register={register}
            rules={{
              pattern: {
                value:
                  /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g,
                message: "номер телефона неверен",
              },
            }}
            name="phone_number"
            label="Номер телефона"
            placeholder="+7 999 999-99-99"
          />
          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="webstudio.fractal@example.com"
          />
        </div>
        <Button
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
          type="submit"
          id="button-start"
        >
          Начать
        </Button>
      </div>
    </main>
  );
}
