import Dashboard from "../pages/Dashboard";
import ProdukDetail from "../pages/ProdukDetail";
import ProdukList from "../pages/ProdukList";
import Login from "../pages/Login";
import Error from "../pages/Error";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/produks",
    component: ProdukList,
  },
  {
    path: "/produk",
    component: ProdukDetail,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "*",
    component: Error,
  },
];

export default routes;
