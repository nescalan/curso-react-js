import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Components
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
