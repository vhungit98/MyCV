import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div id="logo">
      <Link
        style={{
          display: "block",
          padding: 10,
          fontWeight: "bold",
          color: "#fff",
          textDecoration: "none",
        }}
        to="/"
      >
        OCA
      </Link>
    </div>
  );
}
