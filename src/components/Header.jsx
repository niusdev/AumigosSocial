import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../assets/dogs.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <div>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
          </div>
        ) : (
          <Link to="/login" className={styles.login}>
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
