import { Route, Router, Switch } from "react-router";
import Navbar from "./core/components/Navbar/Navbar";
import history from "./core/utils/history";
import Course from "./pages/Course";
import GetDeliveries from "./pages/GetDeliveriesAndRevision";
import Home from "./pages/Home";
import Login from './pages/Auth/Login/index'
import Register from './pages/Auth/Register/index'
import InsertLesson from "./pages/InsertLesson";

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
                {/* <Route path="/user/deliveries">
                    <MyDeliveries/>
                </Route> */}
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router>
    )
} 


export default Routes;