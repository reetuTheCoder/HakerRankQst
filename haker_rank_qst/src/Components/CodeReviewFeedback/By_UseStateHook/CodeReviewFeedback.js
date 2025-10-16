import React, { useState } from "react";
import { aspects } from "./aspects";
import "./CodeReviewFeedback.css";

const CodeReviewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(
    aspects.map(() => ({ upvotes: 0, downvotes: 0 }))
  );

  const [animate, setAnimate] = useState(
    aspects.map(() => ({ upvotes: false, downvotes: false }))
  );

  const handleVote = (index, type) => {
    //  console.log("index", index);
    //  console.log("type", type);
    //  console.log("type", feedbacks[index]);

    setFeedbacks((prev) => {
      const updated = prev.map((feedback, i) => {
        if (i === index) {
          console.log("iii", i);
          console.log("feedback", feedback);
          console.log("Updating:", i, type, feedback);
          return { ...feedback, [type]: feedback[type] + 1 };
        }
        console.log("fdgfsdg");
        
        return feedback;
      });
      console.log("Updated feedbacks:", updated);
      return updated;
    });

    setAnimate((prev) =>
      prev.map((animation, i) =>
        i === index
          ? {
              ...animation,
              [type === "upvotes" ? "upvotes" : "downvotes"]: true,
            }
          : animation
      )
    );

    setTimeout(() => {
      setAnimate((prev) =>
        prev.map((animation, i) =>
          i === index ? { upvotes: false, downvotes: false } : animation
        )
      );
    }, 300);
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {aspects.map((aspect, index) => (
            <div
              key={index}
              style={{
                border: "2px solid green",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h2>{aspect}</h2>
              <p className={animate[index].upvotes ? "animate-upvote" : ""}>
                Upvotes: <strong>{feedbacks[index].upvotes}</strong>
              </p>
              <p className={animate[index].downvotes ? "animate-downvote" : ""}>
                Downvotes: <strong>{feedbacks[index].downvotes}</strong>
              </p>
              <div>
                <button onClick={() => handleVote(index, "upvotes")}>
                  👍 Upvote
                </button>
                <button onClick={() => handleVote(index, "downvotes")}>
                  👎 Downvote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeReviewFeedback;
