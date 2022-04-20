import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Logo() {
  const [t] = useTranslation();
  return (
    <div id="logo">
      <Link style={{ display: "block", padding: 10 }} to="/">
        {t("introduce")}
      </Link>
    </div>
  );
}
