// src/context/PostContext.tsx
import { createContext, useState, useContext } from "react";

export const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  return useContext(PostContext);
}
