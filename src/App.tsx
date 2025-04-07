import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/FIAP.png",
      name: "FIAP",
      role: "Faculdade de Informática e Administração Paulista",
    },
    content: [
      { type: "paragraph", content: "Iremos começar em breve 👋" },
      {
        type: "paragraph",
        content:
          "Hoje a aula será focada em React.js na disciplina Engenharia de Front-end no MBA de Engenharia de Software. Não perca!",
      },
      { type: "link", content: "Ver mais" },
    ],
    publishedAt: new Date("2025-04-07 19:10:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/robertosousa1.png",
      name: "Roberto Alves",
      role: "Professor @FIAP",
    },
    content: [
      { type: "paragraph", content: "Olá, alunos!" },
      {
        type: "paragraph",
        content:
          "Na aula de hoje falamos sobre a evolução da Web e o ecossistema Front-end.",
      },
      { type: "link", content: "Ver mais" },
    ],
    publishedAt: new Date("2025-04-02 22:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
