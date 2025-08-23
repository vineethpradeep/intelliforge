"use client";
import landingContent from "@/content/landingContent";

export default function CaseStudies() {
  const cases = landingContent.caseStudies;

  return (
    <div id="case" className="container-fluid bg-light py-5">
      <div className="container py-5">
        {/* Heading */}
        <div className="mx-auto text-center" style={{ maxWidth: "500px" }}>
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
            Case Study
          </div>
          <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
        </div>

        {/* Case Items */}
        <div className="row g-4">
          {cases.map((item, index) => (
            <CaseItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Individual Case Item Component
function CaseItem({ category, title, img, delay }) {
  return (
    <div className="col-lg-4">
      <div className="case-item position-relative overflow-hidden rounded mb-2">
        <img className="img-fluid" src={img} alt={title} />
        <a className="case-overlay text-decoration-none" href="#">
          <small>{category}</small>
          <h5 className="lh-base text-white mb-3">{title}</h5>
          <span className="btn btn-square btn-primary">
            <i className="fa fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
