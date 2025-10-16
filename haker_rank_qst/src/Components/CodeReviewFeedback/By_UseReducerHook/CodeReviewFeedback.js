import React, { useReducer } from "react";
import "./CodeReviewFeedback.css";
import { feedbackReducer, initialState } from "./feedbackReducer";
import { voteUp, voteDown, resetAnimation } from "./feedbackActions";
import {aspects} from "./aspects"


const CodeReviewFeedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const handleVote = (index, type) => {
    dispatch(type === "upvotes" ? voteUp(index) : voteDown(index));

    setTimeout(() => {
      dispatch(resetAnimation());
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
              <p className={state[index].upvotes ? "animate-upvote" : ""}>
                Upvotes: <strong>{state[index].upvotes}</strong>
              </p>
              <p className={state[index].downvotes ? "animate-downvote" : ""}>
                Downvotes: <strong>{state[index].downvotes}</strong>
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
