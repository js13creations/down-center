import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SectionTitle({ size = "h2", title, goto, classes }) {
  const Tag = size;

  return (
    <Tag className={`section-title d-flex justify-content-between ${classes}`}>
      <span>{title}</span>
      {goto && goto !== "" && (
        <Link to={goto}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="px-3 color-main-yellow"
          />
        </Link>
      )}
    </Tag>
  );
}

export default SectionTitle;
