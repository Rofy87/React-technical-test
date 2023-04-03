import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Farms() {
  const { loading, data, error } = useApiRequest("farms");

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
          head="Farms  List"
          span={` The following table is a Farms List 
          that shows their street name along with longitude and latitude`}
        />
      )}
    </div>
  );
}
