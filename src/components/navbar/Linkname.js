import React from "react";
import PropTypes from "prop-types";
export const Linkname = ({ title, address }) => {
  return (
    <a
      href={address}
      className="h-full flex items-center border-b-4 border-transparent hover:text-white hover:border-mySeconadary dark:hover:border-myPrimaryDark dark:hover:border-myLightTone transition-all duration-200 "
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
