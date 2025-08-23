"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`btn btn-lg btn-primary btn-lg-square back-to-top pt-2 ${
        visible ? "d-inline" : "d-none"
      }`}
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
