import React from "react";
import { useMediaQuery } from "react-responsive";

const HeaderComponent = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (isTabletOrMobile) {
    return (
      <header className="Header-Phone">
        <h1 className="Header-Phone__title">Image search</h1>
        <h4 className="Header-Phone__subtitle">
          Look for what you have in mind and we'll display it nicely
        </h4>
      </header>
    );
  }

  return (
    <header className="Header">
      <h1 className="Header__title">Image search</h1>
      <h4 className="Header__subtitle">
        Look for what you have in mind and we'll display it nicely
      </h4>
    </header>
  );
};

export default HeaderComponent;
