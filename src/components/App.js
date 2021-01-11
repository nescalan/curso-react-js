import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Components
// import BadgeNew from "../pages/BadgeNew";
// import Badges from "../pages/Badges";
import ReactRouter from "./ReactRouter";

function App() {
  return (
    <div>
      <ReactRouter />
    </div>

    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/badges" component={Badges} />
    //     <Route exact path="/badges/new" component={BadgeNew} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
