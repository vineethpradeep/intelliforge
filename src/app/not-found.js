"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist on our
              website! Maybe go to our home page or try to use a search?
            </p>
            <Link href="/" className="btn btn-primary rounded-pill py-3 px-5">
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
