/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [t] = useTranslation();
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{margin: '0 20px'}}>
          <Link
            cla
            className={styles["hvr-underline-from-center"]}
            style={{
              display: "block",
              padding: "10px",
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
            }}
            to="/"
          >
            {t("introduce")}
          </Link>
        </li>
        <li style={{margin: '0 20px'}}>
          <Link
            className={styles["hvr-underline-from-center"]}
            style={{
              display: "block",
              padding: "10px",
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
            }}
            to="/my-cv"
          >
            {t("my-cv")}
          </Link>
        </li>
        <li style={{margin: '0 20px'}}>
          <Link
            className={styles["hvr-underline-from-center"]}
            style={{
              display: "block",
              padding: "10px",
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
            }}
            to="/my-blog"
          >
            {t("my-blog")}
          </Link>
        </li>
        <li style={{margin: '0 20px'}}>
          <Link
            className={styles["hvr-underline-from-center"]}
            style={{
              display: "block",
              padding: "10px",
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
            }}
            to="/updating"
          >
            {t("updating")} ...
          </Link>
        </li>
      </ul>
    </nav>
  );
}
