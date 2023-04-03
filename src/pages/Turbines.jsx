import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";

export default function Turbines() {
  const { loading, data, error } = useApiRequest("turbines");
  const url = { text: "Details", link: "../turbines" };

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
          head="Turbine  List"
          span={` The following table is a Turbine List and its data`}
          url={url}
        />
      )}
    </div>
  );
}
