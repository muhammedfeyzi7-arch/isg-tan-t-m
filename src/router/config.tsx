import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Kvkk from "../pages/kvkk/page";
import Gizlilik from "../pages/gizlilik/page";
import KullanimKosullari from "../pages/kullanim-kosullari/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/kvkk",
    element: <Kvkk />,
  },
  {
    path: "/gizlilik",
    element: <Gizlilik />,
  },
  {
    path: "/kullanim-kosullari",
    element: <KullanimKosullari />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
