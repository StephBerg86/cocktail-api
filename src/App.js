import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cocktails from "./pages/Cocktails";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route path="/cocktails" component={Cocktails} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
