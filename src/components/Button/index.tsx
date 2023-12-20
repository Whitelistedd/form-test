import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  className,
  variant = 1,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        styles[`button--variant-${variant}`]
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
