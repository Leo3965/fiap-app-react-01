import { useEffect, useState } from "react";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("http://localhost:3001/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <div className={styles.loader}>🔄 Carregando posts...</div>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </main>
  );
}
