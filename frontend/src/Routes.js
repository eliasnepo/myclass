import { Route, Router, Switch } from "react-router";
import history from "./core/utils/history";
import Course from "./pages/Course";
import Home from "./pages/Home";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/course">
                    <Course/>
                </Route>
            </Switch>
        </Router>
    )
} 


export default Routes;