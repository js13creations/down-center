import React from "react";

const CareerPathCard = ({ title, content }) => {
  return (
    <div className="card mb-3 shadow border-none h-100 career-path-card">
      <div className="card-body">
        <h4 className="card-title color-main-yellow">{title}</h4>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default CareerPathCard;
