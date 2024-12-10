import { useState } from "react";
import { Container } from "../../../assets/component/container/Container";
import { BurgerMenu } from "../../burgerMenu/ui/BurgerMenu";
import styles from "./header.module.scss";

export const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <div className={styles.logo}>Logo</div>
          <div
            className={styles.burger}
            onClick={() => setIsBurger((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>
      {isBurger ? <BurgerMenu /> : null}
    </header>
  );
};
