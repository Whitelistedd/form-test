import React from "react";
import styles from "./ProgressBar.module.scss";
import { ProgressBarProps } from "./ProgressBar.types";

export const ProgressBar = ({ currentStep, steps }: ProgressBarProps) => {
  const stepsArray = [...Array(steps)].map(() => null);

  return (
    <div className={styles.container}>
      {stepsArray?.map((step, index) =>
        index + 1 === stepsArray.length ? (
          <>
            <div
              className={`${styles.container__circle_container} ${
                currentStep === index + 1 ? styles["active"] : ""
              } ${currentStep > index + 1 ? styles["checked"] : ""}`}
            >
              <div
                id={`${index}`}
                key={index}
                className={`${styles.container__circle} ${
                  currentStep === index + 1
                    ? styles["container__circle--active"]
                    : ""
                } ${
                  currentStep > index + 1
                    ? styles["container__circle--checked"]
                    : ""
                }`}
              />
              <span>{index + 1}</span>
            </div>
          </>
        ) : index === 0 ? (
          <>
            <div
              className={`${styles.container__circle_container} ${
                currentStep === index + 1 ? styles["active"] : ""
              } ${currentStep > index + 1 ? styles["checked"] : ""}`}
            >
              <div
                id={`${index}`}
                key={index}
                className={`${styles.container__circle} ${
                  currentStep === index + 1
                    ? styles["container__circle--active"]
                    : ""
                } ${
                  currentStep > index + 1
                    ? styles["container__circle--checked"]
                    : ""
                }`}
              />
              <span>{index + 1}</span>
            </div>
            <hr
              id={`${index}`}
              key={`${index}-line`}
              className={`${styles.container__line} ${
                currentStep > index + 1 ? styles["container__line--active"] : ""
              }`}
            />
          </>
        ) : (
          <>
            <div
              className={`${styles.container__circle_container} ${
                currentStep === index + 1 ? styles["active"] : ""
              } ${currentStep > index + 1 ? styles["checked"] : ""}`}
            >
              <div
                id={`${index}`}
                key={index}
                className={`${styles.container__circle} ${
                  currentStep === index + 1
                    ? styles["container__circle--active"]
                    : ""
                } ${
                  currentStep > index + 1
                    ? styles["container__circle--checked"]
                    : ""
                }`}
              />
              <span>{index + 1}</span>
            </div>
            <hr
              id={`${index}`}
              key={`${index}-line`}
              className={`${styles.container__line} ${
                currentStep > index + 1 ? styles["container__line--active"] : ""
              }`}
            />
          </>
        )
      )}
    </div>
  );
};
