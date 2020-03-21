import WebSocket from "ws";

import { Message, MessageType } from "./models/Message";

const opts: WebSocket.ClientOptions = {
  origin: "https://websocket.org"
};

const ws = new WebSocket("wss://echo.websocket.org/", opts);

const openConnection = (): void => {
  console.log("Game connected successfully. Waiting for new players.");
};

const closeConnection = (): void => console.log("Closed.");

// Emitters
ws.on("open", openConnection);
ws.on("close", closeConnection);

ws.on("message", (message: string) => {
  const data: Message = JSON.parse(message);

  switch (data.type) {
    case MessageType.Join: {
      // Player joins the game, does not automatically set them to ready
      // data.lobbyId
      // If there is still room in the game, create a new Player for the game
      if (true) {
        console.log("It's Britney bitch", data.gameId);
      }
    }
    case MessageType.Ready: {
      // If all players are ready, start game
    }
  }
});
