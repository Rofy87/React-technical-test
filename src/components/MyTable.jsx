import React from "react";
import { Link } from "react-router-dom";

const MyTable = ({ rows, url = {} }) => {
  return (
    <div className="py-2 min-w-full px-4">
      <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr>
              {Object.keys(rows[0]).map(th => (
                <th
                  key={th}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {th
                    .split("_")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </th>
              ))}
              {url.text && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map(row => (
              <tr key={row.id}>
                {Object.values(row).map((value, index) => (
                  <td key={index} className="px-6 py-4  text-sm text-gray-500">
                    {value}
                  </td>
                ))}
                {url.text && (
                  <td className="px-6 py-3 text-left text-xs font-medium  text-gray-500 ">
                    <Link
                      to={`${url.link}/${row.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 text-xs w-auto inline-block uppercase text-white font-bold  rounded"
                    >
                      {url.text}
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
