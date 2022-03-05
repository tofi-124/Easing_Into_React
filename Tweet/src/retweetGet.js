import React from "react";


export function retweetGet(count) {
  if (count > 0)
    return <span className="rewteet-count">{count}</span>;
  return null;
}
