import React from "react";
import blogData from "../data/blog"
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about={blogData.about}/>
      <ArticleList title={blogData.posts[0].title} date={blogData.posts[0].date} preview={blogData.posts[0].preview} minutes={blogData.posts[0].minutes}/>
      <ArticleList title={blogData.posts[1].title} date={blogData.posts[1].date} preview={blogData.posts[1].preview} minutes={blogData.posts[1].minutes}/>
      <ArticleList title={blogData.posts[2].title} date={blogData.posts[2].date} preview={blogData.posts[2].preview} minutes={blogData.posts[2].minutes}/>

    </div>
  );
}

export default App;
