import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h2>{props.name}</h2>
      <p>
        title: <span>{props.title}</span>
      </p>
      <p>
        languages: <span>{props.languages}</span>
      </p>
    </div>
  );
};

export default Box;
