import Game from './game.model'
import Player from '../player/player.model';

function startGame(): Game {
    const game = new Game();
    game.id = generateGameId();
    game.connectPlayer(newPlayer());

    return game;
}

function generateGameId(): string {
    return '1234';
}

function newPlayer(): Player {
    return new Player();
}

export default {
    startGame,
}