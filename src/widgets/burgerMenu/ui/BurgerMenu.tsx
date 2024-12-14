import { LeftOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__list}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <UserOutlined />
          </div>
          <div className={styles.inf}>
            <div className={styles.user_name}>UserName</div>
            <div className={styles.name}>Andrey Valiuk</div>
          </div>
        </div>
        <ul className={styles.content}>
          <li className={styles.content__item}>
            <Link to={"/add"}>Создать новый плейлист</Link>
          </li>
          <li className={styles.content__item}>
            посмотреть твои плейлисты на создание
          </li>
          <li className={styles.content__item}>
            <Link to="/playlist">
              посмотреть плейлисты в которых ты добавляешь
            </Link>
          </li>
          <li className={styles.content__item}>привязка спотифай аккаунта</li>
        </ul>
        <div className={styles.footer}>
          <div className={`${styles.footer__avatar} ${styles.avatar}`}>
            <LeftOutlined />
          </div>
          <p className={styles.footer__text}>Выйти из аккаунта</p>
        </div>
      </div>
    </div>
  );
};
