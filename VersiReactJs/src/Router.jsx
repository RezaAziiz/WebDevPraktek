import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login"; 
import Register from "./views/Register";
import DetailPage from "./views/DetailPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/register",
    element:<Register/>
    
  },
  {
    path: "/detail",
    element:<DetailPage/>
    
  }
]);

export default router;
