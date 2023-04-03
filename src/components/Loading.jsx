import React from "react";
import imageSrc from "../assets/Loading_icon.gif";

const Loading = () => {
  return (
    <div className="bg-white h-[300px] mt-3 rounded-md flex justify-center items-center ">
      <img src={imageSrc} alt="Loading" width="200px" />
    </div>
  );
};

export default Loading;
