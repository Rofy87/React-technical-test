import React from "react";
import MyTable from "./MyTable";

const Page = ({ head, span, data, url = {} }) => {
  return (
    <>
      <h1 className="text-gray-500 text-2xl font-medium px-4 pt-4">{head}</h1>
      <span className="text-sm text-gray-500 inline-block pb-4 pt-1 italic px-4">
        {span}
      </span>
      <MyTable rows={data} url={url} />
    </>
  );
};

export default Page;
