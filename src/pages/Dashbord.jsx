import { useSelector } from "react-redux";
import DashboardGrid from "../components/dashboard/DashboardGrid";
import Loader from "../components/Loader";

function Dashbord() {
  const { data, status, error } = useSelector((store) => store.reviewData);
  return (
    <>
      {status === "loading" && <Loader />}
      {status === "finished" && <DashboardGrid reviewData={data} />}
      {status === "error" && <h1>{error}</h1>}
    </>
  );
}

export default Dashbord;
