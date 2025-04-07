import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const socket = io("https://simple-websocket-api-production.up.railway.app");

export function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Conecta e escuta evento de lista inicial
    socket.on("listaPosts", (data) => {
      setPosts(data);
      setLoading(false);
    });

    // Escuta novos posts em tempo real
    socket.on("novoPost", (post) => {
      setPosts((prevPosts) => [post, ...prevPosts]);
    });

    // Escuta remoção de post
    socket.on("postRemovido", (idRemovido) => {
      setPosts((prevPosts) => prevPosts.filter((p) => p.id !== idRemovido));
    });

    // Cleanup para evitar múltiplos listeners
    return () => {
      socket.off("listaPosts");
      socket.off("novoPost");
      socket.off("postRemovido");
    };
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
