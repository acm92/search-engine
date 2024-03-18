import React from "react";
import { useMediaQuery } from "react-responsive";

const ImageComponent = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (isTabletOrMobile) {
    return (
      <div className="image-container">
        <a href={props.imag.urls.full}>
          <img
            className="image-phone"
            alt={props.imag.alt_description}
            src={props.imag.urls.small}
          />
        </a>
      </div>
    );
  }

  return (
    <div className="image-container">
      <a href={props.imag.urls.full}>
        <img
          className="image"
          alt={props.imag.alt_description}
          src={props.imag.urls.small}
        />
      </a>
    </div>
  );
};

export default ImageComponent;
