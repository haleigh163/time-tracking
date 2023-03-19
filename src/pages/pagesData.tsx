import { Navigate } from "react-router-dom";
import NewRecord from "./NewRecord";
import Overview from "./Overview";
import Records from "./Records";

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
