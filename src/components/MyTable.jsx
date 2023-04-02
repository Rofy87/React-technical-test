import React from "react";

const MyTable = ({ rows }) => {
  return (
    <div className="py-2 min-w-full px-4">
      <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
