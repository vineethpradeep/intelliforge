"use client";
import landingContent from "@/content/landingContent";

export default function Team() {
  const { members } = landingContent;
  return (
    <div id="team" className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Our Team
            </div>
            <h1 className="mb-4">Meet Our Experienced Team Members</h1>
            <p className="mb-4">
              Intelliforge is led by a team of experts in AI and RPA who drive
              innovation and deliver tailored solutions to empower businesses.
            </p>
            <a className="btn btn-primary rounded-pill px-4" href="#">
              Read More
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="row g-4">
              {members.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Team Member Component
function TeamMember({ name, role, img }) {
  return (
    <div className="col-md-6">
      <div className="team-item bg-white text-center rounded p-4 pt-0">
        <img className="img-fluid rounded-circle p-4" src={img} alt={name} />
        <h5 className="mb-0">{name}</h5>
        <small>{role}</small>
        <div className="d-flex justify-content-center mt-3">
          <SocialIcon icon="fab fa-facebook-f" />
          <SocialIcon icon="fab fa-twitter" />
          <SocialIcon icon="fab fa-instagram" />
          <SocialIcon icon="fab fa-linkedin-in" />
        </div>
      </div>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ icon }) {
  return (
    <a className="btn btn-square btn-primary m-1" href="#">
      <i className={icon}></i>
    </a>
  );
}
