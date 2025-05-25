import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Mainlayout from "./Pages/MainLayout/Mainlayout";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;
