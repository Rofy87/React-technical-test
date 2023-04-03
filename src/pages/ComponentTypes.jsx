import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";

export default function ComponentTypes() {
  const { loading, data, error } = useApiRequest("component_types");

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
          head="Component Types List"
          span={` The following table is a Component Types  List `}
        />
      )}
    </div>
  );
}
