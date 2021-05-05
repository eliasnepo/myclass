import { Route, Router, Switch } from "react-router";
import Navbar from "./core/components/Navbar/Navbar";
import history from "./core/utils/history";
import Login from "./Login";
import Course from "./pages/Course";
import GetDeliveries from "./pages/GetDeliveriesAndRevision";
import Home from "./pages/Home";
import InsertLesson from "./pages/InsertLesson";
import MyDeliveries from "./pages/MyDeliveries";

const Routes = () => {
    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/course/:courseId" exact>
                    <Course/>
                </Route>
                <Route path="/course/:courseId/insert">
                    <InsertLesson/>
                </Route>
                <Route path="/course/:courseId/deliveries">
                    <GetDeliveries/>
                </Route>
                <Route path="/user/deliveries">
                    <MyDeliveries/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
} 


export default Routes;