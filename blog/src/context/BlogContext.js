import React, {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPost] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, {title: `BlogPost #${blogPost.length +1}`}])
  };

  return (
    < BlogContext.Provider value={{data:blogPosts, addBlogPost}}>{children}</BlogContext.Provider>
  )
};

export default BlogContext;
