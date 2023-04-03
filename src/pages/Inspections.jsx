import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";

export default function Inspection() {
  const { loading, data, error } = useApiRequest("inspections");
  const url = { text: "Details", link: "inspection" };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <Page
          data={data["data"]}
          head="Turbine Inspection List"
          span={` The following table is a Turbine Inspection List that shows which
        turbine is being investigated, along with its location`}
          url={url}
        />
      )}
    </div>
  );
}
