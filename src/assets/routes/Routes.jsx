import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import HomePage from "../pages/HomePage/HomePage";
import OurChefs from "../pages/OurChefs/OurChefs";
import Recipes from "../pages/Recipes/Recipes";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ChefDetailsLayout from "../layout/ChefDetails/ChefDetailsLayout";
import Blog from "../pages/Blog/Blog";


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
            element: <OurChefs />
          },
          {
            path: "recipes",
            element: <Recipes />,
          },
          {
            path: "blog",
            element: <Blog/>
          }
          
      ]
  },
  {
    path: "/chefs",
    element: <ChefDetailsLayout />,
    children: [
      {
        path: ':id',
        element: <ChefDetails />,
        loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
      }

    ]
  }
]);
  
export default router;