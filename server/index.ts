import app from "./server";
import Lobby from "./models/lobby/lobby.model";

interface Global {
  lobby: Lobby;
}

const lobby = new Lobby();
global.lobby = lobby;

app.listen(8000);
