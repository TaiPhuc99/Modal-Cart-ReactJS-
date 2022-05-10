import React, { Component } from "react";
import Item from "./Item";

export default class ItemList extends Component {
  renderItemList = () => {
    return this.props.phoneArr.map((item) => {
      return (
        <Item
          dataEachPhone={item}
          changeDetailPhone={this.props.changeDetailPhone}
          addItemtoModal={this.props.addItemtoModal}
        />
      );
    });
  };
  render() {
    return <div className="row p-5">{this.renderItemList()}</div>;
  }
}
