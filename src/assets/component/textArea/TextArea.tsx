import { ComponentProps, FC } from "react";
import styles from "./text.module.scss";

type TextAreaProps = ComponentProps<"textarea"> & {
  className?: string;
  label?: string;
};

export const TextArea: FC<TextAreaProps> = ({ className, label, ...props }) => {
  return (
    <label className={styles.wrapper}>
      <p className={styles.labe}>{label}</p>
      <textarea className={`${className} ${styles.text}`} {...props}></textarea>
    </label>
  );
};
