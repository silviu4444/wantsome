import React, { Component } from "react";
import Item from "./Item";
import "./Shop.css";
import Text from "./Item";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  collectData() {
    const item = document.querySelector("#item");
    const price = document.querySelector("#price");
    this.setState(() => ({
      data: [
        ...this.state.data,
        {
          item: item.value,
          price: price.value,
          id: this.state.data.length + 1,
        },
      ],
    }));
    setTimeout(() => {
      item.value = "";
      price.value = "";
    }, 0);
  }

  deleteBtn(id) {
    this.setState((prevState) => ({
      data: prevState.data.filter((el) => {
        return el.id === id ? "" : el;
      }),
    }));
  }

  editBtn(id) {
    this.setState((prevState) => ({
      data: prevState.data.map((el) =>
        el.id === id ? { ...el, item: "done", price: "yes" } : el
      ),
    }));
  }


  render() {
    return (
      <div>
        <input id="item" type="text" placeholder="Item" />
        <input id="price" type="text" placeholder="Price" />
        <button onClick={this.collectData.bind(this)} id="btn">
          Save
        </button>
        <div className="d-flex">
          {this.state.data.map((el, index) => {
            return (
              <div key={index}>
                <Item item={el.item} price={el.price} />
                <button onClick={this.deleteBtn.bind(this, el.id)}>
                  Delete
                </button>
                <button onClick={this.editBtn.bind(this, el.id)}>
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Shop;