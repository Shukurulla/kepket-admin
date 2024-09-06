import { io } from "socket.io-client";

const socket = io("https://kep-ket-api.vercel.app/api/socket", {
  transports: ["websocket"],
});

export default socket;
