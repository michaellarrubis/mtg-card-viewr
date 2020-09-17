import React from "react";
import loaderDefault from '../assets/images/loader-default.gif';
import loaderDarkMode from '../assets/images/loader-dark-mode.gif';

const Loader = ({ displayMode }) => {
  return (
    <div className="loader">
      <img
        src={displayMode ? loaderDarkMode : loaderDefault}
        alt="loader"
        className="loader-image"
      />
    </div>
  );
};

export default Loader;
