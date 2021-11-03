import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ContactUs from "../pages/contact/ContactUs";

import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import OurTeam from "../pages/team/OurTeam";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart";

const Routes = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/tienda" component={Shop}></Route>
        <Route exact path="/equipo" component={OurTeam}></Route>
        <Route exact path="/contactanos" component={ContactUs}></Route>
        <Route exact path="/usuario" component={Profile}></Route>
        <Route exact path="/carrito" component={Cart}></Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
