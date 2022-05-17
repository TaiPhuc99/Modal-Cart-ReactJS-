import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class ItemList extends Component {
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

let mapStateToProps = (state) => {
  return { phoneArr: state.item.dataPhones };
};

export default connect(mapStateToProps)(ItemList);
