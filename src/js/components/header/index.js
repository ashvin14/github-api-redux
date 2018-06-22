import React from "react";
import Buttons from "./buttons";
import { connect } from "react-redux";
import services from "./../../services";

class Header extends React.Component {
  onSubmit = ev => {
    ev.preventDefault();
    console.log(ev.target.username.value);
    this.props.dispatch(
      services.UserService.getUserGithubInfo(
        `/users/${ev.target.username.value}/repos`
      )
    );
  };
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            name="username"
            placeholder="Github::username"
            aria-label="Search"
          />
        </form>
      </nav>
    );
  }
}
let mapStateToProps = state => {
  return {
    state: state.userFetcher
  };
};

export default connect(mapStateToProps)(Header);
