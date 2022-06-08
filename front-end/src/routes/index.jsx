import { Switch, Route } from "react-router"
import Dashboard from "../pages/Dashboard"
import GroupQ from "../pages/GroupQuestion"
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

            <Route exact path='/groupquestion'>
                <GroupQ	/>
            </Route>
        </Switch>
    )
}

export default Routes