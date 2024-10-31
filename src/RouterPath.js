import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Page/Home/Home";
import Notfoundpage from "./Page/404/Notfoundpage";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"*",
            element:<Notfoundpage/>
          }
        ]
      }
])