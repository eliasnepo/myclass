import { Route, Router, Switch } from "react-router";
import Navbar from "./core/components/Navbar/Navbar";
import history from "./core/utils/history";
import Course from "./pages/Course";
import Enrollment from "./pages/Enrollment";
import GetDeliveries from "./pages/GetDeliveriesAndRevision";
import Home from "./pages/Home";
import Login from './pages/Auth/Login/index'
import Register from './pages/Auth/Register/index'
import InsertLesson from "./pages/InsertLesson";
import PrivateRoute from "./core/utils/PrivateRoutes";

const Routes = () => {
    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <PrivateRoute path="/" allowedRoutes={[]} exact>
                    <Home/>
                </PrivateRoute>
                <PrivateRoute path="/course/:courseId" allowedRoutes={[]} exact>
                    <Course/>
                </PrivateRoute>
                <PrivateRoute path="/course/:courseId/insert" allowedRoutes={['ROLE_INSTRUCTOR']}>
                    <InsertLesson/>
                </PrivateRoute>
                <PrivateRoute path="/course/:courseId/deliveries" allowedRoutes={['ROLE_INSTRUCTOR']}>
                    <GetDeliveries/>
                </PrivateRoute>
                <PrivateRoute path="/enrollment" allowedRoutes={[]}>
                    <Enrollment />
                </PrivateRoute>
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