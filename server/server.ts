import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Controllers
import gameController from "./models/game/game.controller";
import Lobby from "./models/lobby/lobby.model";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/game', gameController);

export default app;
