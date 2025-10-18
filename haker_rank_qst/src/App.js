import "./App.css";
import CodeReviewFeedback from "./Components/CodeReviewFeedback/By_UseStateHook/CodeReviewFeedback";
import CodeReviewFeedbacks from "./Components/CodeReviewFeedback/By_UseReducerHook/CodeReviewFeedback";
import Blogs from "./Components/BlogPost/Blogs";
import ArticlesSort from "./Components/ArticlesSorting/ArticlesSort";
import { articles } from "./Components/ArticlesSorting/articles";
import { useState } from "react";

function App() {
  const [articleSort, setArticleSort] = useState(articles);

  const handleSortArticle = (type) => {
    const sorted = [...articles];
    // console.log("sorted", sorted);

    if (type === "upvote") {
      let storeupvote = sorted.sort((a, b) => b.upvotes - a.upvotes);
      console.log("storeupvote", storeupvote);
    }
    if (type === "date") {
      let storeDate = sorted.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      console.log("storeDate", storeDate);
    }

    setArticleSort(sorted)
  };



  return (
    <div className="App">
      {/* <CodeReviewFeedback /> */}

      <br />
      <br />
      {/* <CodeReviewFeedbacks /> */}

      <br />
      <br />

      {/* <Blogs/> */}

      <div className="sort-section">
        <p className="sort-label">Sort By</p>
        <div className="sort-buttons">
          <button
            className="sort-btn"
            onClick={() => handleSortArticle("upvote")}
          >
            Most Upvoted
          </button>
          <button
            className="sort-btn"
            onClick={() => handleSortArticle("date")}
          >
            Most Recent
          </button>
        </div>
      </div>

      <ArticlesSort articles={articleSort} />
    </div>
  );
}

export default App;
