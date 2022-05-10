/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class ItemDetail extends Component {
  render() {
    let { hinhAnh, manHinh, heDieuHanh, giaBan } = this.props.detailEachPhone;
    return (
      <div className="row mt-5">
        <img
          className="col-5"
          style={{ height: "100%", width: "80vw" }}
          src={hinhAnh}
        />
        <div className="col-7">
          <table className="table mt-5">
            <tr>
              <td>Screen</td>
              <td>{manHinh}</td>
            </tr>
            <tr>
              <td>Operation System</td>
              <td>{heDieuHanh}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{giaBan} VND</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
