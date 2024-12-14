import { useState } from "react";
import { Button } from "../../../assets/component";
import { Container } from "../../../assets/component/container/Container";
import { Input } from "../../../assets/component/input/Input";

import styles from "./add.module.scss";
import { TextArea } from "../../../assets/component/textArea/TextArea";
import { HeaderSecond } from "../../../widgets";

export const AddPlayList = () => {
  const [title, setTitle] = useState(" ");
  const [descr, setDescr] = useState("  ");

  return (
    <div className={styles.add}>
      <Container>
        <div className={styles.add__container}>
          <HeaderSecond text="Новый плейлист" />

          <form className={styles.form}>
            <h2 className={styles.form__title}>Создайте свой плейлист</h2>
            <Input
              label="Название плейлиста"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
              label="Описание"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
              className={styles.area}
            />
            <div className={styles.btn}>
              <Button children="Создпть плейлист" />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
