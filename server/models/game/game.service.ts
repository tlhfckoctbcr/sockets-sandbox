import { v4 as uuid } from "uuid";

import Game from './game.model'
import Player from '../player/player.model';

function newGame(playerName: string): Game {
    const game = new Game();
    game.id = generateGameId();
    game.connectPlayer(newPlayer(playerName, 1));

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
}