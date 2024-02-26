import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Layout";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailsPage from "./Components/Details/DetailsPage";
import { Children } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        ,
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:cuisine",
          element: <Home />,
        },
        {
          path: "search/:search",
          element: <Home />,
        },
        {
          path: "/details/:id",
          element: <DetailsPage />,
        },
      ]
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
