import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function InspectionDetails() {
  const params = useParams();
  const { loading, data, error } = useApiRequest(`inspections/${params.id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div>
      {data && (
        <Page
          data={data["data"]["inspectionDetails"]}
          head={`Turbine "${data["data"]["turbine_name"]}": Inspection Details`}
          span={` The following table is a Turbine Inspection detail that shows which
          compnonets of the turbine and its conditions`}
        />
      )}
    </div>
  );
}
