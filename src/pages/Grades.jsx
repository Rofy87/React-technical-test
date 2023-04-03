import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Grades() {
  const { loading, data, error } = useApiRequest("grades");

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
          data={data["data"]}
          head="Grade System List"
          span={` The following table is a Grade  List 
          that shows the number value and their correspondence text `}
        />
      )}
    </div>
  );
}
