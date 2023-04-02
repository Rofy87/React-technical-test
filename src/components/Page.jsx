import React from "react";
import MyTable from "./MyTable";

const Page = ({ head, span, data }) => {
  return (
    <>
      <h1 className="text-neutral-600 text-2xl font-medium  pt-4">{head}</h1>
      <span className="text-sm text-gray-500 inline-block pb-4 pt-1 italic">
        {span}
      </span>
      <MyTable rows={data} />
    </>
  );
};

export default Page;
