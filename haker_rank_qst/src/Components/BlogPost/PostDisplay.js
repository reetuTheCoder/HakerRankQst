import React from "react";

function PostDisplay({ title, description ,onClick}) {
    console.log("titel",title);
    
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onClick}>Delete</button>
      </div>
    </div>
  );
}

export default PostDisplay;
