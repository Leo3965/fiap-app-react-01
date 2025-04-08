import { useEffect, useState } from "react";
import { Post } from "../../components/Post/";
import {
  socket,
  setupSocketListeners,
  cleanupSocketListeners,
} from "../../services/socket";

export function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setupSocketListeners({
      onListaPosts: (data) => {
        setPosts(data);
        setLoading(false);
      },
      onNovoPost: (post) => {
        setPosts((prev) => [post, ...prev]);
      },
      onPostRemovido: (id) => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      },
    });

    return cleanupSocketListeners;
  }, []);

  return (
    <main>
      {loading ? (
        <div>🔄 Carregando posts...</div>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </main>
  );
}
