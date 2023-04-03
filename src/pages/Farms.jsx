import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";

export default function Farms() {
  const { loading, data, error } = useApiRequest("farms");

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
          head="Farms  List"
          span={` The following table is a Farms List 
          that shows their street name along with longitude and latitude`}
        />
      )}
    </div>
  );
}
