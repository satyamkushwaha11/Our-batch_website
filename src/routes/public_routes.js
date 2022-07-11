
import  Login from "../pages/auth/Login.jsx"
import  Signup from "../pages/auth/Signup.jsx"
import PageNotFound404 from "../pages/PageNotFound404.jsx"


const publicRoutes=[
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path:"/signup",
        name:"Signup",
        component:Signup
    },
    {
        path:"*",
        name:"404",
        component:PageNotFound404
    },
    
    

]
export default publicRoutes