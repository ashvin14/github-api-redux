import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import Root from "./Root.jsx";
import App from "./components";

class Index extends Component {
  render() {
    return (
      <Root {...this.props}>
        <App />
      </Root>
    );
  }
}

let mapStateToProps = state => {
  return {
    state: state.commonReducer
  };
};
export default connect(mapStateToProps)(Index);
