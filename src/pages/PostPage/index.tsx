import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContext";
import { Post } from "../../components/Post/";
import { useEffect } from "react";

export function PostPage() {
  const { selectedPost } = usePost();
  const navigate = useNavigate();

  console.log(selectedPost);

  useEffect(() => {
    if (!selectedPost) {
      navigate("/");
    }
  }, [selectedPost, navigate]);

  return <div>{selectedPost && <Post post={selectedPost} />}</div>;
}
