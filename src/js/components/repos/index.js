import React from "react";
import RepoLink from "./RepoLink";

export default class RepoBody extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <ul className=" list-item ">
          <li className="list-group-item">
            <RepoLink />
          </li>
        </ul>
      </div>
    );
  }
}
