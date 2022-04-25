/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
        <li>
          <Link
            style={{
              display: "block",
              padding: "10px 30px",
              fontWeight: "bold",
              color: "#fff",
              minWidth: 130,
            }}
            to="/"
          >
            {t("introduce")}
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "block",
              padding: "10px 30px",
              fontWeight: "bold",
              color: "#fff",
              minWidth: 130,
            }}
            to="/my-cv"
          >
            {t("my-cv")}
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "block",
              padding: "10px 30px",
              fontWeight: "bold",
              color: "#fff",
              minWidth: 130,
            }}
            to="/my-blog"
          >
            {t("my-blog")}
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "block",
              padding: "10px 30px",
              fontWeight: "bold",
              color: "#fff",
              minWidth: 130,
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
