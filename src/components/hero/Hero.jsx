"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import landingContent from "@/content/landingContent";
import HeroSVG from "@/components/utils/HeroSVG";

export default function Hero() {
  const { hero } = landingContent;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!hero.images || hero.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hero.images]);

  return (
    <div className="container-fluid pt-5 bg-primary hero-header mb-5">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div
            className={`col-lg-6 align-self-center text-center text-lg-start mb-lg-5 hero-column`}
          >
            <div className={`hero-svg-bg`}>
              <HeroSVG />
            </div>

            <div className={`hero-content`}>
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
                {hero.badge}
              </div>
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                {hero.title}
              </h1>
              <p className="text-white mb-4 animated slideInRight">
                {hero.subtitle}
              </p>
              <Link
                href={hero.ctaPrimary.href}
                className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight me-2"
              >
                {hero.ctaPrimary.text}
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
              >
                {hero.ctaSecondary.text}
              </Link>
            </div>
          </div>

          <div className="col-lg-6 align-self-end text-center text-lg-end d-none d-lg-block">
            <div className={`hero-slider position-relative d-inline-block`}>
              {hero.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Hero Image ${index + 1}`}
                  className={`hero-slide`}
                  style={{ opacity: index === currentSlide ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
