import dynamic from "next/dynamic";

const NotFoundC = dynamic(() => import("../../components/NotFound/NotFound"));

const NotFound = () => {
  return <NotFoundC />;
};

export default NotFound;