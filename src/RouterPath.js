import { createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Root from "./Root";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
          {
            path:"",
            element:<Header/>
          },
        //   {
        //     path:"*",
        //     element:<ProductFetch/>
        //   }
        ]
      }
])