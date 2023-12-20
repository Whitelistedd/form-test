import React, { ForwardedRef, LegacyRef, forwardRef } from "react";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const Input = (
  {
    label,
    register,
    rules = {},
    name,
    className,
    labelProps,
    error,
    ...props
  }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <label
      {...labelProps}
      className={`${styles.label} ${labelProps?.className}`}
    >
      {label}
      <input
        {...register(name as any, rules)}
        {...props}
        className={`${styles.input} ${className}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};
