"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  // Track hash in the URL for sections (#about, #services, etc.)
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Sticky navbar scroll effect
  useEffect(() => {
    const navbar = document.querySelector(".sticky-top");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        navbar.classList.add("bg-primary", "shadow-sm");
        navbar.style.top = "0px";
      } else {
        navbar.classList.remove("bg-primary", "shadow-sm");
        navbar.style.top = "0px";
        if (pathname !== "/") {
          navbar.classList.add("bg-primary");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link href="/" className="navbar-brand">
            <h1 className="text-white">Intelliforge</h1>
          </Link>

          <button
            className="navbar-toggler ms-auto me-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link
                href="/"
                className={`nav-item nav-link ${
                  pathname === "/" && !hash ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className={`nav-item nav-link ${
                  hash === "#about" ? "active" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/#services"
                className={`nav-item nav-link ${
                  hash === "#services" ? "active" : ""
                }`}
              >
                Services
              </Link>
              <Link
                href="/#case"
                className={`nav-item nav-link ${
                  hash === "#case" ? "active" : ""
                }`}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className={`nav-item nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            <button
              type="button"
              className="btn text-white p-0 d-none d-lg-block"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
