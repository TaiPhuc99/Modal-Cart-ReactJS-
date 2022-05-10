/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

const increaseQuantiy = 1;
const decreaseQuantiy = -1;

export default class Modal extends Component {
  // Render Table in Cart
  renderTableInCart = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img style={{ maxWidth: "150px" }} src={item.hinhAnh}></img>
          </td>
          <td>{item.giaBan} VND</td>
          <td>
            <button
              onClick={() => {
                this.props.changeQuantity(item.maSP, increaseQuantiy);
              }}
              class="btn btn-success mx-2"
            >
              +
            </button>
            {item.quantity}
            <button
              onClick={() => {
                this.props.changeQuantity(item.maSP, decreaseQuantiy);
              }}
              class="btn btn-primary mx-2"
            >
              -
            </button>
          </td>
          <td>{item.giaBan * item.quantity} VND</td>
        </tr>
      );
    });
  };

  // Present Quantiy in Cart
  renderTotalQuantity = () => {
    return this.props.cart.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0);
  };

  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <div className="text-center mt-5">
          <button
            type="button"
            className="btn btn-primary "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            CART ({this.renderTotalQuantity()})
          </button>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            style={{ maxWidth: "80vw" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/*Render DSSP trong GioHang */}
                <table className="table">
                  <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Expense</th>
                  </thead>
                  <tbody>{this.renderTableInCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
