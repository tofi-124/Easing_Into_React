import React from "react";

export const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;

export const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet " />
      {retweetGet(count)}
    </span>
  );
};

function retweetGet(count) {
  if (count > 0) return <span className="rewteet-count">{count}</span>;
  return null;
}

export const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart " />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};
