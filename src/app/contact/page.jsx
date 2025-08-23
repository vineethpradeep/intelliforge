"use client";

export default function Contact() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
            Contact Us
          </div>
          <h1 className="mb-4">
            Have Questions or Need Assistance? Contact Our Team
          </h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <p className="text-center mb-4">
              Our team at Intelliforge is here to help. Please fill out the form
              below, and we’ll get back to you promptly to discuss your AI and
              automation solutions. This replaces the generic “form inactive”
              and download message with professional company-focused content.{" "}
              <a
                href="https://htmlcodex.com/contact-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </a>
              .
            </p>

            <div className="wow fadeIn" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
