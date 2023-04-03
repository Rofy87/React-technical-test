import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import { useParams } from "react-router-dom";

export default function TurbineComponents() {
  const params = useParams();
  const { loading, data, error } = useApiRequest(`turbines/${params.id}`);

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
          data={data["data"]["components"]}
          head={`Turbine "${data["data"]["name"]}": Components List Details`}
          span={` The following table is a List of the components that the turbine has`}
        />
      )}
    </div>
  );
}
