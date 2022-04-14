import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../Navebar/Navbar";
import Navbar_User from "../Navebar/Navbar_User";
import Dashboard from "../pages/DashbordContent/DashbordContent";
function MainCard() {
    let { path, url } = useRouteMatch();
    // console.log(url);
    // console.log(path);
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={`${url}/dashboard`}>
                    <Navbar />
                    <Navbar_User />
                    <Dashboard />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default MainCard;
