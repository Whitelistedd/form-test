import React, { useRef, useState } from "react";
import styles from "./Select.module.scss";
import { Controller } from "react-hook-form";
import { SelectProps } from "./Select.types";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";

export const Select = ({
  name,
  control,
  options,
  label,
  error,
  rules,
}: SelectProps) => {
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);

  const ref = useRef(null);
  useOutsideClick(ref, () => setOptionsMenuOpen(false));

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div ref={ref} className={styles.container}>
          <span className={styles.label}>{label}</span>
          <div
            onClick={() => setOptionsMenuOpen((prev) => (prev ? false : true))}
            className={styles.select}
          >
            <span>{value.name}</span>
          </div>
          <div
            className={`${styles.options} ${
              optionsMenuOpen ? styles.enabled : ""
            }`}
          >
            {options.map(({ itemId, name, value, ...props }) => (
              <span
                {...props}
                key={itemId}
                onClick={() => {
                  onChange({ name, value: value === undefined ? name : value });
                  setOptionsMenuOpen(false);
                }}
                className={styles.option}
              >
                {name}
              </span>
            ))}
          </div>
          <span className={styles.error}>{error}</span>
        </div>
      )}
      control={control}
    />
  );
};
