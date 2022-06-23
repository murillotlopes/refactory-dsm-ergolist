import { Switch } from "react-router"
import Dashboard from "../pages/Dashboard"
import GroupQ from "../pages/GroupQuestion"
import Home from "../pages/Home"
import NovaAvaliacao from "../pages/NovaAvaliacao"
import Questoes from "../pages/Questoes"
import { Route } from './Route'

const Routes = () => {
  return (
    <Switch>

      <Route exact path='/' component={Home} />
      <Route exact path='/dashboard' component={Dashboard} isPrivate />
      <Route exact path='/nova-avaliacao/' component={NovaAvaliacao} isPrivate />
      <Route exact path='/groupquestion/:assessmentId' component={GroupQ} isPrivate />
      <Route exact path='/groupquestion/:assessmentId/questao/:questionId' component={Questoes} isPrivate />
      <Route exact path='/nova-avaliacao' component={NovaAvaliacao} isPrivate />

    </Switch>

  )
}

export default Routes