import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}

FooterLayout.propTypes = {
  style: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
  logo: PropTypes.object,
  copyright: PropTypes.object,
};
