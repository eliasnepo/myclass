import { Route, Router, Switch } from "react-router";
import Navbar from "./core/components/Navbar/Navbar";
import history from "./core/utils/history";
import Course from "./pages/Course";
import Home from "./pages/Home";

const Routes = () => {
    return (
        <Router history={history}>
            <Navbar />
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