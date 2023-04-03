import React from "react";

const Error = ({ message }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 mt-5 px-4 py-3 rounded "
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
    </div>
  );
};

export default Error;
