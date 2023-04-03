import useApiRequest from "../hooks/useApiRequest";
import Page from "../components/Page";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Turbines() {
  const { loading, data, error } = useApiRequest("turbines");
  const url = { text: "Details", link: "../turbines" };

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
          head="Turbine  List"
          span={` The following table is a Turbine List and its data`}
          url={url}
        />
      )}
    </div>
  );
}
