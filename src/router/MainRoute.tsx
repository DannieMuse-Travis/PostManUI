import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Layout/Layout"
import HomeScreen from "../pages/Home/HomeScreen"
import SignIn from "../pages/Auth/Siginin"
import SignUp from "../pages/Auth/SignUp"


export const mainRoute = createBrowserRouter([

    {
     path:"/",
     element:<Layout/>,
     children:[{
        path:"/",
        element:<HomeScreen/>
     }]
    },{
        path:"/login",
        element:<SignIn/>,

    },
    {
        path:"/singup",
        element:<SignUp/>
    }
])