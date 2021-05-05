import { Route, Router, Switch } from "react-router";
import Navbar from "./core/components/Navbar/Navbar";
import history from "./core/utils/history";
import Login from "./Login";
import Course from "./pages/Course";
import Home from "./pages/Home";
import InsertLesson from "./pages/InsertLesson";

const Routes = () => {
    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/course" exact>
                    <Course/>
                </Route>
                <Route path="/course/insert">
                    <InsertLesson/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
} 


export default Routes;