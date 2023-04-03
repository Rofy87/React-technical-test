import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";

export default function Grades() {
  const { loading, data, error } = useApiRequest("grades");

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
          head="Grade System List"
          span={` The following table is a Grade  List 
          that shows the number value and their correspondence text `}
        />
      )}
    </div>
  );
}
