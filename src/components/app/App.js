import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.scss';
import Pages from "../../pages/index"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/bids/:id" component={Pages.MerchantBids} />
          <Route path="/add_merchant" component={Pages.AddMerchant} />
          <Route path="/edit_merchant/:id" component={Pages.EditMerchant} />
          <Route path="/" exact component={Pages.Merchants} />
        </Switch>
      </Router>
    );
  }
}
export default App;
