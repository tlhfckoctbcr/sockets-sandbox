import Game from "../game/game.model";

export default class Lobby {
  activeGames: Game[] = [];

  addGameToLobby(game: Game): void {
    this.activeGames.push(game);
  }
}
