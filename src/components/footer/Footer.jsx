"use client";
import landingContent from "@/content/landingContent";

export default function Footer() {
  const { footer } = landingContent;

  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <a href="/" className="d-inline-block mb-3">
              <h1 className="text-white">
                {footer.companyName}
                <span className="text-primary">.</span>
              </h1>
            </a>
            <p className="mb-0">{footer.description}</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i> {footer.address}
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i> {footer.phone}
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i> {footer.email}
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href={footer.social.twitter}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={footer.social.facebook}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={footer.social.youtube}
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={footer.social.instagram}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={footer.social.linkedin}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Popular Links</h5>
            {footer.links.popular.map((link, i) => (
              <a key={i} className="btn btn-link" href="#">
                {link}
              </a>
            ))}
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Our Services</h5>
            {footer.links.services.map((service, i) => (
              <a key={i} className="btn btn-link" href="#">
                {service}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; {new Date().getFullYear()}{" "}
              <a className="border-bottom" href="#">
                {footer.companyName}
              </a>
              , All Rights Reserved. Designed By{" "}
              <a
                className="border-bottom"
                href="https://dotseek.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                DotSeek
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                {footer.links.menu.map((menu, i) => (
                  <a key={i} href="#">
                    {menu}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
