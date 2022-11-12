import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
    </>
  );
};

export default Heading;
