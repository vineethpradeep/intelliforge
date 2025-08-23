"use client";
import landingContent from "@/content/landingContent";

export default function Services() {
  const { services } = landingContent;

  return (
    <div id={services.id} className="container-fluid bg-light mt-5 py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              {services.badge}
            </div>
            <h1 className="mb-4">{services.title}</h1>
            <p className="mb-4">{services.subtitle}</p>
            <a
              className="btn btn-primary rounded-pill px-4"
              href={services.cta.href}
            >
              {services.cta.text}
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="row g-4">
              {services.items.map((item, index) => (
                <div key={index} className="col-md-6 pt-md-4">
                  <ServiceItem {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Service Item Component
function ServiceItem({ icon, title, description }) {
  return (
    <div className="col-12">
      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
        <div className="service-icon btn-square">
          <i className={`fa ${icon} fa-2x`}></i>
        </div>
        <h5 className="mb-3">{title}</h5>
        <p>{description}</p>
        <a className="btn px-3 mt-auto mx-auto" href="#">
          Read More
        </a>
      </div>
    </div>
  );
}
