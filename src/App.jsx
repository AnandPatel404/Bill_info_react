import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Landing_layout from "./Components/Landing-Layout/Main_Card/MainCard";
// import "swiper/css/bundle";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <Landing_layout />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
