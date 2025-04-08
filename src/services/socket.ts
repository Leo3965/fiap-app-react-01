import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL);

export function setupSocketListeners({
  onListaPosts,
  onNovoPost,
  onPostRemovido,
}) {
  socket.on("listaPosts", onListaPosts);
  socket.on("novoPost", onNovoPost);
  socket.on("postRemovido", onPostRemovido);
}

export function cleanupSocketListeners() {
  socket.off("listaPosts");
  socket.off("novoPost");
  socket.off("postRemovido");
}
