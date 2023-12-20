import React from "react";
import styles from "./Checkbox.module.scss";
import CheckSVG from "@/assets/svg/check.svg";
import Image from "next/image";
import { CheckboxProps } from "./Checkbox.types";
export const Checkbox = ({
  rules,
  label,
  error,
  name,
  register,
  ...props
}: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        {...register(name, rules)}
        id={`checkbox-${name}`}
        className={styles.checkbox__input}
        type="checkbox"
      />
      <label htmlFor={`checkbox-${name}`} className={styles.checkbox__square}>
        <Image
          src={CheckSVG}
          width={16}
          height={16}
          alt="check-image"
          className={styles.checkbox__check}
        />
      </label>
      <span>{label}</span>
    </div>
  );
};
