import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/services/${service.code}`);
  };
  return (
    <div className="card border-none shadow service-card">
      <div className="card-body ">
        <h4 className="card-title color-main-blue">{service?.title}</h4>
        <p className="card-text mb-1">
          <FontAwesomeIcon icon={faClock} className="me-2 color-main-yellow" />
          {service?.duration}
        </p>
        
        <div className="d-flex justify-content-end align-items-center">
          <button onClick={handleBookNow} className="btn book-now-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
