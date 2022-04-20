import React from "react";
import { useTranslation } from "react-i18next";

export default function Updating() {
  const [t] = useTranslation();
  return <p>{t("updating")}</p>;
}
