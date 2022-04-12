import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../Navebar/Navbar";
function MainCard() {
    let { path, url } = useRouteMatch();
    // console.log(url);
    // console.log(path);
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={`${url}/dashboard`}>
                    <Navbar />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default MainCard;
