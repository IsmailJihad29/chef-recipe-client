import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import HomePage from "../pages/HomePage/HomePage";
import OurChefs from "../pages/OurChefs/OurChefs";


const router = createBrowserRouter([
    {
      path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element:<HomePage/>
          },
          {
            path: "chefs",
            element:<OurChefs/>
          }
      ]
    },
]);
  
export default router;