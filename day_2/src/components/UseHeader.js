import React from "react";
import PropTypes from "prop-types";

const UseHeader = ({ title }) => {
  return <h5 style={history}>{title}</h5>;
};

const history = {
  margin: "2rem 0",
  padding: "1rem 0 1rem .5rem",
  boxShadow: "0px .5px 1px #333",
};

UseHeader.proTypes = {
  title: PropTypes.string.isRequired,
};

export default UseHeader;
