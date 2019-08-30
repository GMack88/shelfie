import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Product from "./Components/Product/Product";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Dashboard />
          <div>
            <Product />
          </div>
        </div>
        <form>
          <Form />
        </form>
      </div>
    );
  }
}

export default App;
