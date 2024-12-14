import { MoreOutlined } from "@ant-design/icons";
import { Container } from "../../../assets/component";
import { HeaderSecond } from "../../../widgets";

import styles from "./styles.module.scss";

export const PlayList = () => {
  return (
    <div className={styles.playlist}>
      <Container>
        <div className={styles.add__container}>
          <HeaderSecond text="Плейлист" />
          <div className={styles.img}>IMG</div>
          <h2 className={styles.title}>Название плейлиста</h2>
          <h3 className={styles.author}>Автор</h3>
          <div className={styles.list}>
            <div className={styles.list__item}>
              <div className={styles.box}>
                <div className={styles.name}>Название песни</div>
                <div className={styles.singer}>Исполнитель</div>
              </div>
              <MoreOutlined />
            </div>
            <div className={styles.list__item}>
              <div className={styles.box}>
                <div className={styles.name}>Название песни</div>
                <div className={styles.singer}>Исполнитель</div>
              </div>
              <MoreOutlined />
            </div>
            <div className={styles.list__item}>
              <div className={styles.box}>
                <div className={styles.name}>Название песни</div>
                <div className={styles.singer}>Исполнитель</div>
              </div>
              <MoreOutlined />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
