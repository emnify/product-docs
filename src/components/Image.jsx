import React from "react";
import PropTypes from "prop-types";

const Image = ({ alt, srcPath, modifiers }) => {
  let classNames = "img";
  if (modifiers) {
    classNames += ` ${modifiers}`;
  }
  return <img className={classNames} src={srcPath} alt={alt ? alt : ""} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  srcPath: PropTypes.string.isRequired,
  modifiers: PropTypes.string,
};

export default Image;
