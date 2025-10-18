import "./App.css";
import CodeReviewFeedback from "./Components/CodeReviewFeedback/By_UseStateHook/CodeReviewFeedback";
import CodeReviewFeedbacks from "./Components/CodeReviewFeedback/By_UseReducerHook/CodeReviewFeedback";
import Blogs from "./Components/BlogPost/Blogs";
import FormValidations from "./Components/FormValidation/FormValidations";
import EmployeeValidationForm from "./Components/EmployeeValidationForm/EmployeeValidationForm";

function App() {
  return (
    <div className="App">
      {/* <CodeReviewFeedback /> */}

      <br />
      <br />
      {/* <CodeReviewFeedbacks /> */}


        <br />
      <br />

      {/* <Blogs/> */}

      {/* <FormValidations /> */}
      <EmployeeValidationForm/>
    </div>
  );
}

export default App;
