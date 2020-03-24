import { v4 as uuid } from "uuid";

import Game from './game.model'
import Player from '../player/player.model';

function newGame(playerName: string): Game {
    const game = new Game();
    game.id = generateGameId();
    game.connectPlayer(newPlayer(playerName, 1));
    global.lobby.addGameToLobby(game);

    return game;
}

function getGame(gameId: string): Game {
    const game = global.lobby.activeGames.find((game) => game.id === gameId);
    if (!game) throw new Error(`No active game with the ID ${gameId} found.`);
    return game;
}

function addPlayerToGame(gameId: string, playerName: string): Game | undefined {
    const game = getGame(gameId);
    if (!game) return;
 
    const newPlayer = new Player(playerName, game.players.length + 1);
    game.players.push(newPlayer);

    return game;
}

function generateGameId(): string {
    return uuid();
}

function newPlayer(name: string, id: number): Player {
    return new Player(name, id);
}

export default {
    newGame,
    getGame,
    addPlayerToGame
}