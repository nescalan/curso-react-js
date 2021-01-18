import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//import Components
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/badges" component={Badges} />
        <Route path="/badges/new" component={BadgesNew} />
      </BrowserRouter>
    </div>
  );
}

export default App;
