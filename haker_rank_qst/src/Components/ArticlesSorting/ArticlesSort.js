import React from "react";

function ArticlesSort({ articles = [] }) {
  return (
    <div className="articles-container">
      <table className="articles-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="article-row">
              <td className="article-title">{article.name}</td>
              <td className="article-upvotes">{article.upvotes}</td>
              <td className="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArticlesSort;
