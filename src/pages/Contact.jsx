import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import ddsc from "../assets/images/ddc.jpg";

function Contact() {
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center color-main-yellow">
        Dubai Down Syndrome Center
      </h2>
      <div className="row m-2 bg-light p-4 radius-8">
        <div className="col-sm-4 col-12">
          <img
            src={ddsc}
            className="w-100 radius-8 mt-2"
            alt="Dubai Down Syndrome Center Logo"
          />
        </div>
        <div className="col-sm-8 col-12  ">
          <p className="mb-2 mt-2 pe-3">
            The Dubai Down Syndrome Center is dedicated to empowering
            individuals with Down syndrome by providing education, vocational
            training, and career opportunities that promote independence and
            inclusion. With a strong emphasis on skill development, the center
            offers tailored programs to help individuals explore various career
            paths suited to their strengths and interests. From roles in
            hospitality and retail to administrative and creative industries,
            the center collaborates with businesses and organizations to create
            meaningful employment opportunities. By fostering a supportive
            environment, the Dubai Down Syndrome Center aims to break barriers
            and build a more inclusive workforce in the UAE.
          </p>
          <div className="contact-info">
            <h2 className="mb-4 color-main-blue">Contact Information</h2>
            <ul className="list-unstyled ">
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 color-main-yellow" />
                <a
                  href="mailto:info@ddsc.ae"
                  className="text-decoration-none text-dark"
                >
                  info@ddsc.ae
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-2 color-main-yellow" />
                <a
                  href="tel:042613145"
                  className="text-decoration-none text-dark"
                >
                  042613145
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 color-main-yellow" />
                <a
                  href="https://www.google.com/maps/search/Office+208,+Mirdif+35+Mall,+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Office 208, Mirdif 35 Mall, Dubai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
