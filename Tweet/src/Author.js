import React from "react";

function Author({ text }) {
  return (
    <span className="author">
      <span className="name">{text.name}</span>
      <span className="handle">{text.handle}</span>
    </span>
  );
}

export default Author;