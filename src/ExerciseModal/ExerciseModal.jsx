import React, { Component } from "react";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";
import Modal from "./Modal";
import { dataPhones } from "./DataList";

export default class ExerciseModal extends Component {
  state = {
    dataPhones: dataPhones,
    detailPhone: dataPhones[0],
    cart: [],
  };

  // Render Detail Phone
  changeDetailPhone = (item) => {
    this.setState({ detailPhone: item });
  };

  // Add to modal
  addItemtoModal = (item) => {
    let cartClone = [...this.state.cart];

    // Check index
    const index = this.state.cart.findIndex((product) => {
      return product.maSP === item.maSP;
    });

    if (index === -1) {
      let phone = { ...item, quantity: 1 };
      cartClone.push(phone);
    } else {
      cartClone[index].quantity++;
    }

    // Render modal
    this.setState({ cart: cartClone });
  };

  // Change Quantity
  changeQuantity = (idItem, value) => {
    // Check index
    const index = this.state.cart.findIndex((product) => {
      return product.maSP === idItem;
    });

    let cartClone = [...this.state.cart];

    if (index !== -1) {
      cartClone[index].quantity += value;
      cartClone[index].quantity === 0 && cartClone.splice(index, 1);
    }

    // Render modal
    this.setState({ cart: cartClone });
  };

  render() {
    return (
      <div>
        <Modal cart={this.state.cart} changeQuantity={this.changeQuantity} />
        <ItemList
          phoneArr={this.state.dataPhones}
          changeDetailPhone={this.changeDetailPhone}
          addItemtoModal={this.addItemtoModal}
        />
        <ItemDetail detailEachPhone={this.state.detailPhone} />
      </div>
    );
  }
}
