import React from "react";
import { Helmet } from "react-helmet-async";

function HelmetWrapper({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default HelmetWrapper;
