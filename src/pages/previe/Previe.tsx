import { Container } from "../../assets/component/container/Container";
import { Header } from "../../widgets";

import styles from "./previe.module.scss";

export const Previe = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Container className={styles.flex_grow}>
        <div className={styles.content}>
          <h1 className={styles.title}>Добро пожаловать </h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            consequatur saepe voluptate praesentium officia accusamus suscipit
            reprehenderit soluta laborum, nobis culpa, atque accusantium,
            quisquam sapiente vel dolore illum excepturi ex?
          </p>
        </div>
      </Container>
      <Container>
        <button className={styles.button}>Зарегистрироваться</button>
      </Container>
    </div>
  );
};
