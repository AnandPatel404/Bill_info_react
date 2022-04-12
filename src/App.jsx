import { useState, React } from "react";
import { Switch, Route } from "react-router-dom";
import Landing_layout from "./Components/Landing-Layout/Main_Card/MainCard";
// import "swiper/css/bundle";
import UserMainCard from "./Components/User/MainCard/MainCard";
function App() {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <Landing_layout />
                </Route>
                <Route path="/users">
                    <UserMainCard />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
