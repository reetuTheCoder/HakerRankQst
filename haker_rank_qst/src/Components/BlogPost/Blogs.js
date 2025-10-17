import React, { useState } from "react";
import PostDisplay from "./PostDisplay";
import InputFields from "./InputFields";

const Blogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const createPost = () => {
    if (title && description) {
      console.log("hello", description, title);
      setPosts([...posts, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  const deletePost = (deleteIndex) =>{
   const updatedPost = posts.filter((ele, index)=> index !== deleteIndex)
   setPosts(updatedPost)
   console.log("updatedPost", updatedPost);
   
   setPosts(updatedPost);
  }
  return (
    <div>
      <div>
        <InputFields
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <button onClick={createPost}>Create Post</button>
      </div>
      <div data-testid="posts-list">
        {posts.map((post, index) => {
          return (
            <PostDisplay
              key={index}
              title={post.title}
              description={post.description}
              onClick={()=> deletePost(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
