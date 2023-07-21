import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home, MyAccount, MyOrder, MyOrders, NotFound, SignIn } from "../index";
import { Header, Layout } from "../../components";

const AppRouters = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function AppUI() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <AppRouters />
      </Layout>
    </BrowserRouter>
  );
}

export { AppUI };
