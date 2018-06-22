import React from "react";
import Header from "./header";
import RepoBody from "./repos";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RepoBody />
      </div>
    );
  }
}
