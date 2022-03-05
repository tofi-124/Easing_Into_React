import React from "react";
import { retweetGet } from "./retweetGet";

export const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet " />
      {retweetGet(count)}
    </span>
  );
};
