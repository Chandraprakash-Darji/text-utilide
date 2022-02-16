import React from "react";
import PropTypes from "prop-types";
export const Linkname = ({ title, address }) => {
  return (
    <a
      href={address}
      className="h-full flex items-center border-b-2 border-transparent hover:border-white transition-all duration-200"
    >
      {title}
    </a>
  );
};
Linkname.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string,
};
Linkname.defaultProps = {
  address: "/",
};
