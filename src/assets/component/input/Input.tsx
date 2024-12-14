import { ComponentProps, FC } from "react";
import styles from "./input.module.scss";

type InputProps = ComponentProps<"input"> & {
  className?: string;
  label?: string;
};

export const Input: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <label className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <input className={`${className} ${styles.input}`} {...props} />
    </label>
  );
};
