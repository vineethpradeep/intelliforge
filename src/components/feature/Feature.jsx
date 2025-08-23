"use client";
import landingContent from "@/content/landingContent";

export default function Feature() {
  const { feature } = landingContent;

  return (
    <div id={feature.id} className="container-fluid bg-primary feature pt-5">
      <div className="container pt-5">
        <div className="row g-5">
          {/* Left Column */}
          <div className="col-lg-6 align-self-center mb-md-5 pb-md-5">
            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
              {feature.badge}
            </div>
            <h1 className="text-white mb-4">{feature.title}</h1>
            <p className="text-light mb-4">{feature.subtitle}</p>

            {/* Feature Points */}
            {feature.points.map((point, index) => (
              <FeaturePoint key={index} text={point} />
            ))}

            {/* Counters */}
            <div className="row g-4 pt-3">
              {feature.counters.map((counter, index) => (
                <Counter
                  key={index}
                  icon={counter.icon}
                  number={counter.number}
                  label={counter.label}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 align-self-end text-center text-md-end">
            <img className="img-fluid" src={feature.image} alt="Feature" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Point Component
function FeaturePoint({ text }) {
  return (
    <div className="d-flex align-items-center text-white mb-3">
      <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
        <i className="fa fa-check"></i>
      </div>
      <span>{text}</span>
    </div>
  );
}

// Counter Component
function Counter({ icon, number, label }) {
  return (
    <div className="col-sm-6">
      <div
        className="d-flex rounded p-3"
        style={{ background: "rgba(255, 255, 255, 0.1)" }}
      >
        <i className={`fa ${icon} fa-3x text-white`}></i>
        <div className="ms-3">
          <h2 className="text-white mb-0">{number}</h2>
          <p className="text-white mb-0">{label}</p>
        </div>
      </div>
    </div>
  );
}
