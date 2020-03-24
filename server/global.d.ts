import Lobby from "./models/lobby/lobby.model";

declare global {
  namespace NodeJS {
    interface Global {
        lobby: Lobby;
    }
  }
}
