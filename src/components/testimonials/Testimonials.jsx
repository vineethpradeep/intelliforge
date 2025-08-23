"use client";
import landingContent from "@/content/landingContent";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonials() {
  const { testimonials } = landingContent;
  const carouselRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const $ = require("jquery");
      window.$ = window.jQuery = $;

      require("owl.carousel");

      $(carouselRef.current).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          992: { items: 1 },
        },
      });
    }
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Testimonial
            </div>
            <h1 className="mb-4">What Our Clients Say</h1>
            <p className="mb-4">
              See how Intelliforge helps businesses leverage AI and RPA to
              achieve smarter operations and higher growth.
            </p>
          </div>
          <div className="col-lg-7">
            <div
              ref={carouselRef}
              className="owl-carousel testimonial-carousel border-start border-primary"
            >
              {testimonials.map((item, i) => (
                <div className="testimonial-item ps-5" key={i}>
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">{item.quote}</p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src={item.img}
                      style={{ width: "60px", height: "60px" }}
                      alt={item.name}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">{item.name}</h5>
                      <span>{item.profession}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
