import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import WebSocket from "ws";

import { Message, MessageType } from "./Message";
import Player from "./Player";
import Game from "./Game";

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

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/start', (req, res) => {
  const game = new Game();
  game.id = '1234';
  console.log(game);
  res.json(game);
})

app.use("/", router);
app.listen(8000);
