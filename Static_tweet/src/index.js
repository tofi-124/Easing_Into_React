import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;
const RetweetButton = () => <i className="fa fa-retweet retweet-button"></i>;
const LikeButton = () => <i className="fa fa-heart like-button"></i>;

function Message() {
  return <div className="message">this is a tweet</div>;
}

function Author() {
  return (
    <span className="author">
      <span className="name">Tofik</span>
      <span className="handle">@123</span>
    </span>
  );
}

function Time() {
  return <span className="time">5 hours ago</span>;
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      alt="avatar"
      className="avatar"
    />
  );
}

ReactDOM.render(<Tweet />, document.querySelector("#root"));
