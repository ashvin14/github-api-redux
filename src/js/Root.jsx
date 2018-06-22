import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Component } from "react";

export default class Root extends Component {
  render() {
    return <Provider store={this.props.store}>{this.props.children}</Provider>;
  }
}
