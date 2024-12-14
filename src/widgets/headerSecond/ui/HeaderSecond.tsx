import { FC } from "react";
import style from "./header.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  text: string;
  className?: string;
};

export const HeaderSecond: FC<HeaderProps> = ({ text, className }) => {
  const navigate = useNavigate();

  return (
    <div className={`${className} ${style.header}`}>
      <div className={style.icon} onClick={() => navigate(-1)}>
        <LeftOutlined />
      </div>
      <p className={style.text}>{text}</p>
    </div>
  );
};
