import { Switch, Route } from "react-router"
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/dashboard'>
                <Dashboard/>
            </Route>
        </Switch>
    )
}

export default Routes