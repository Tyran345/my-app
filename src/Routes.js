import { BrowserRouter, Routes as Switch , Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/register";

const Routes = ()=>{

    return (
        <BrowserRouter>
        <Switch>
            <Route path = "/"  element= {<Home/>}/>
            <Route path = "/register"  element= {<Register/>}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;