import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import { useParams } from "react-router-dom";

export default function InspectionDetails() {
  const params = useParams();
  const { loading, data, error } = useApiRequest(`inspections/${params.id}`);

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
          data={data["data"]["inspectionDetails"]}
          head="Turbine Inspection List"
          span={` The following table is a Turbine Inspection List that shows which
        turbine is being investigated, along with its location`}
        />
      )}
    </div>
  );
}
