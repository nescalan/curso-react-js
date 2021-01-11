import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import Components
// import Layout from "./Layout";
// import Home from "../pages/Home";
// import Badges from "../pages/Badges-BackUp";
// import BadgeNew from "../pages/BadgeNew";
// import NotFound from "../pages/NotFound";
import Helloworld from "../components/Helloworld";

function App() {
  return (
    <Helloworld />

    // <BrowserRouter>
    //   <Layout>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/badges" component={Badges} />
    //       <Route exact path="/badges/new" component={BadgeNew} />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </Layout>
    // </BrowserRouter>
  );
}

export default App;
