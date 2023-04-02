import MyTable from "../components/MyTable";
import useApiRequest from "../hooks/useApiRequest";

export default function Inspection() {
  const { loading, data, error } = useApiRequest("inspections");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <>
          <h1 className="text-neutral-600 text-2xl font-medium  pt-4">
            Turbine Inspection List
          </h1>
          <span className="text-sm text-gray-500 inline-block pb-4 pt-1 italic">
            The following table is a Turbine Inspection List that shows which
            turbine is being investigated, along with its location
          </span>
          <MyTable rows={data["data"]} />
        </>
      )}
    </div>
  );
}
