import React from "react";

function SubmitButton(props) {
  return (
    <button className="btn btn-outline-success my-2 my-sm-0" type={props.type}>
      search
    </button>
  );
}

const Buttons = {
  SubmitButton
};

export default Buttons;
