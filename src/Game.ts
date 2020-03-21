import Player from "./Player";

export default class Game {
  players: Player[] = [];

  connectPlayer(player: Player) {
    this.players.push(player);
    console.log(`Player '${player.name}' connected; ID: ${player.id}`);
  }
}
