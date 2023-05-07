import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element:<HomePage/>
          }
      ]
    },
]);
  
export default router;