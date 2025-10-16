import "./App.css";
import CodeReviewFeedback from "./Components/CodeReviewFeedback/By_UseStateHook/CodeReviewFeedback";
import CodeReviewFeedbacks from "./Components/CodeReviewFeedback/By_UseReducerHook/CodeReviewFeedback";

function App() {
  return (
    <div className="App">
      <CodeReviewFeedback />

      <br />
      <br />
      <CodeReviewFeedbacks />
    </div>
  );
}

export default App;
