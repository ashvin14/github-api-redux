import React from "react";

function RepoName(props) {
  return <div className="list-group-item col-xs-3 col-md-3">{props.name}</div>;
}

function RepoStars(props) {
  return (
    <div className="list-group-item col-xs-3 col-md-3">{props.stars} </div>
  );
}

function Repository(props) {
  return <div className="list-group-item col-xs-6 col-md-6">{props.link}</div>;
}
export default class RepoLink extends React.Component {
  render() {
    return (
      <div className="row">
        <RepoName name={"default"} />
        <Repository link={"http://default/link.com"} />
        <RepoStars stars={"default stars"} />
      </div>
    );
  }
}
