import React from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

export const Modal = ({
  children,
  className,
  modalWrapProps,
  ...props
}: ModalProps) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div
        className={`${styles.modal} ${modalWrapProps?.className}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
