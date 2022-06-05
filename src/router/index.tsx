import { useRoutes, Navigate } from "react-router-dom";

import Discover from "pages/discover";
import Friend from "pages/friend";
import Mine from "pages/mine";

export const routes = [
  {
    // 路由重定向
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/friend",
    element: <Friend />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
];

const Routes = () => useRoutes(routes);

export default Routes;
