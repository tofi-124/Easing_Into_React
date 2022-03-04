import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import moment from "moment";

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

function retweetGet(count) {
  if (count > 0) return <span className="rewteet-count">{count}</span>;
  return null;
}

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet " />
      {retweetGet(count)}
    </span>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart " />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

const data = {
  message: "A tweet about me",
  gravatar: "https://www.gravatar.com/avatar/nothing",
  author: {
    handle: "@tofi124",
    name: "Tofi",
  },
  likes: 5,
  retweets: 2,
  timestamp: "2022-01-01 21:24:37",
};

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ text }) {
  return (
    <span className="author">
      <span className="name">{text.name}</span>
      <span className="handle">{text.handle}</span>
    </span>
  );
}

function Time({ time }) {
  return <span className="time">{moment(time).fromNow()}</span>;
}

function Avatar({ hash }) {
  return <img src={hash} alt="avatar" className="avatar" />;
}

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));
