import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      productName: "",
      price: 0
    };
  }
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.getProduct(id);
  }
  handleImageChange = e => {
    this.setState({ imageUrl: e.target.value });
  };

  handleProductChange = e => {
    this.setState({
      productName: e.target.value
    });
  };
  handlePriceChange = e => {
    this.setState({
      price: e.target.value
    });
  };

  cancelInput = id => {
    this.setState({
      imageUrl: "",
      productName: "",
      price: ""
    });
  };

  getProduct = id => {
    axios.get(`/api/product/${id}`).then(response => {
      console.log(response);
      const { imageUrl, productName, price } = response.data;
      this.setState({
        imageUrl: imageUrl,
        productName: productName,
        price: price
      });
    });
  };

  submitProduct = () => {
    const { imageUrl, productName, price } = this.state;
    const product = {
      imageUrl: imageUrl,
      productName: productName,
      price: price
    };
    axios.post(`/api/productName`, productName).then(response => {});
    this.cancelInput();
  };

  render() {
    return (
      <div>
        <div>
          <img
            src={this.state.imageUrl}
            onError={() => {
              this.setState({
                imgURL:
                  "https://www.marylandhillel.org/wp-content/plugins/bc-flex-content/images/default-no-image.jpg"
              });
            }}
          />
          <input
            type="text"
            onChange={event => this.handleProductChange(event)}
          />
          <input
            type="text"
            onChange={event => this.handleImageChange(event)}
          />
          <input
            type="text"
            placeholder="0"
            onChange={event => this.handlePriceChange(event)}
          />
          <button onClick={() => this.submitProduct()}>Add To Inventory</button>
          <button onClick={() => this.cancelInput()}>Cancel</button>
        </div>
      </div>
    );
  }
}
