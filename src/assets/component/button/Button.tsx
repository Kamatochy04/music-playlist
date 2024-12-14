import React, { FC } from "react";

import styles from "./button.module.scss";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ className, children }) => {
  return <div className={`${className} ${styles.button}`}>{children}</div>;
};
