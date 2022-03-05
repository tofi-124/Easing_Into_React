import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";


import Avatar from "./Avatar";
import Author from "./Author";
import Time from "./Time";
import Message from "./Message";
import { RetweetButton } from "./RetweetButton";
import { LikeButton } from "./LikeButton";
import { ReplyButton } from "./ReplyButton";
import { data } from "./data";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author text={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));
