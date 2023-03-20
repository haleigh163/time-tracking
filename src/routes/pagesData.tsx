import { Navigate } from "react-router-dom";
import NewRecord from "../pages/NewRecord";
import Overview from "../pages/Overview";
import Records from "../pages/Records";

type routerType = {
  title: string;
  path: string;
  element: JSX.Element;
};

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Records />,
    title: "Records",
  },
  {
    path: "/overview",
    element: <Overview />,
    title: "Overview",
  },
  {
    path: "/new",
    element: <NewRecord />,
    title: "New Record",
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    title: "*",
  },
];

export default pagesData;
