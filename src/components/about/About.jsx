"use client";
import landingContent from "@/content/landingContent";

export default function About() {
  const { about } = landingContent;

  return (
    <div className="container-fluid py-5" id={about.id}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Image */}
          <div className="col-lg-6">
            <div className="about-img">
              <img className="img-fluid" src={about.image} alt="About Us" />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              {about.badge}
            </div>
            <h1 className="mb-4">{about.title}</h1>
            <p className="mb-4">{about.subtitle}</p>
            <p className="mb-4">{about.description}</p>

            {/* Features */}
            <div className="row g-3">
              {about.features.map((feature, index) => (
                <div key={index} className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>
                    {feature.top}
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>
                    {feature.bottom}
                  </h6>
                </div>
              ))}
            </div>

            {/* Buttons + Social Icons */}
            <div className="d-flex align-items-center mt-4">
              <a
                className="btn btn-primary rounded-pill px-4 me-3"
                href={about.cta.href}
              >
                {about.cta.text}
              </a>
              {about.socials.map((social, index) => (
                <a
                  key={index}
                  className="btn btn-outline-primary btn-square me-3"
                  href={social.href}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
