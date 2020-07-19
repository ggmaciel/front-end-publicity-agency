import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//Components
import HomePage from "./components/HomePage";
import Sobre from "./components/Sobre";
import Pivo from "./components/Pivo";
import Hawea from "./components/Hawea";
import Virginia from "./components/Virginia";
import Default from "./components/Default";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/sobre" component={Sobre}></Route>
                <Route exact path="/trabalhos/pivo" component={Pivo}></Route>
                <Route exact path="/trabalhos/hawea" component={Hawea}></Route>
                <Route
                    exact
                    path="/trabalhos/virginia"
                    component={Virginia}
                ></Route>
                <Route component={Default} />
            </Switch>
        </div>
    );
}

export default App;
