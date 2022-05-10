/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.dataEachPhone;

    return (
      <div className="card col-12 col-lg-4 text-center">
        <div className="card-img-top">
          <img
            src={hinhAnh}
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">{tenSP}</h5>
            <p className="card-text">{giaBan} VND</p>

            <div className="row justify-content-center">
              <button
                className="btn btn-success mx-3"
                onClick={() => {
                  this.props.changeDetailPhone(this.props.dataEachPhone);
                }}
              >
                Detail
              </button>
              <button
                className="btn btn-danger mx-1"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  this.props.addItemtoModal(this.props.dataEachPhone);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
