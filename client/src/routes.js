import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Store";
import ItemPage from "./pages/ItemPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: ItemPage
  }
];
