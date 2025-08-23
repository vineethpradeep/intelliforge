"use client";
import landingContent from "@/content/landingContent";

export default function Faqs() {
  const { left: faqsLeft, right: faqsRight } = landingContent.faqs;

  return (
    <div id="faqs" className="container-fluid py-5">
      <div className="container py-5">
        <div className="mx-auto text-center" style={{ maxWidth: "500px" }}>
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
            Popular FAQs
          </div>
          <h1 className="mb-4">Frequently Asked Questions</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Accordion faqs={faqsLeft} parentId="accordionFAQ1" />
          </div>
          <div className="col-lg-6">
            <Accordion faqs={faqsRight} parentId="accordionFAQ2" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Accordion component
function Accordion({ faqs, parentId }) {
  return (
    <div className="accordion" id={parentId}>
      {faqs.map((item, index) => {
        const headingId = `heading${parentId}${index}`;
        const collapseId = `collapse${parentId}${index}`;
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={headingId}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={collapseId}
              className="accordion-collapse collapse"
              aria-labelledby={headingId}
              data-bs-parent={`#${parentId}`}
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
