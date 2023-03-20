import React from "react";

const BlogPage = () => {
    const articles = [
      {
        id: 1,
        title: "React Basics",
        content: "This article covers the basics of React.",
        url: "https://www.example.com/react-basics"
      },
      {
        id: 2,
        title: "Advanced React",
        content: "This article covers advanced topics in React.",
        url: "https://www.example.com/advanced-react"
      },
      {
        id: 3,
        title: "React Hooks",
        content: "This article covers the use of hooks in React.",
        url: "https://www.example.com/react-hooks"
      }
    ];
  
    const handleClick = (url) => {
      window.location.href = url;
    };
  
    return (
      <div>
        <h1>Blog</h1>
        {articles.map((article) => (
          <div key={article.id} onClick={() => handleClick(article.url)}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogPage;