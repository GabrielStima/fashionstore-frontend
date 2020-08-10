import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from "./components/Container";

import Home from "./views/Home";
import ListProduct from "./views/ListProduct";
import InfoProduct from "./views/InfoProduct";
import Bag from "./views/Bag";

const Routes = ({ callbackAlert }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Container {...props} component={Home} />}
      />
      <Route
        exact
        path="/masculino"
        render={(props) => (
          <Container {...props} category="1" component={ListProduct} />
        )}
      />
      <Route
        exact
        path="/feminino"
        render={(props) => (
          <Container {...props} category="2" component={ListProduct} />
        )}
      />
      <Route
        exact
        path="/item/:id"
        render={(props) => <Container {...props} component={InfoProduct} />}
      />
      <Route
        exact
        path="/bag"
        render={(props) => (
          <Container {...props} callbackAlert={callbackAlert} component={Bag} />
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
