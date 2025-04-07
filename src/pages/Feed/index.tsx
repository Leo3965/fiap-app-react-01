import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Post } from "../../components/Post";
import styles from "./Feed.module.css";

const socket = io("https://simple-websocket-api-production.up.railway.app");

export function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("listaPosts", (data) => {
      setPosts(data);
      setLoading(false);
    });

    socket.on("novoPost", (post) => {
      setPosts((prevPosts) => [post, ...prevPosts]);
    });

    socket.on("postRemovido", (idRemovido) => {
      setPosts((prevPosts) => prevPosts.filter((p) => p.id !== idRemovido));
    });

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
