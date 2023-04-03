import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function ComponentTypes() {
  const { loading, data, error } = useApiRequest("component_types");

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
          data={data.data}
          head="Component Types List"
          span={` The following table is a Component Types  List `}
        />
      )}
    </div>
  );
}
