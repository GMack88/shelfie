import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Product from "./Components/Product/Product";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="Header">
          <Header />
        </div>
        <div className="Dashboard">
          <Dashboard />
          <div className="Product">
            <Product />
          </div>
        </div>
        <form className="Form">
          <Form />
        </form>
      </div>
    );
  }
}

export default App;
