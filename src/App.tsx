import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import { Feed } from "./pages/Feed/";
import { PostPage } from "./pages/PostPage/";

import "./styles/global.css";

export function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post/" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}
