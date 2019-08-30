import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { inventoryList: [] };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios.get("/api/inventory").then(response => {
      this.setState({
        inventoryList: response.data
      });
    });
  };

  removeProduct = id => {
    const { getProducts } = this;

    axios.delete(`/api/product/${id}`).then(response => {
      getProducts();
    });
  };

  render() {
    const mappedInventory = this.state.inventoryList.map(product => {
      return (
        <Product
          Key={product.id}
          product={product}
          removeProduct={this.removeProduct}
        />
      );
    });
    return <div>{mappedInventory}</div>;
  }
}
