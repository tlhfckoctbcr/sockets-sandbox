import express, { Request, Response } from "express";

import gameService from "./game.service";

const router = express.Router();

function newGame(req: Request, res: Response): void {
  try {
    const { playerName } = req.body;
    const newGame = gameService.newGame(playerName);

    res.json(newGame);
  } catch(e) {
    console.error(e);
  }
}

function joinGame(req: Request, res: Response): void {
  try {
    const { gameId } = req.params;
    const { playerName } = req.body;
    const updatedGame = gameService.addPlayerToGame(gameId, playerName);

    res.json(updatedGame);
  } catch(e) {
    console.error(e);
  }
}

function getGame(req: Request, res: Response): void {
  try {
    const { gameId } = req.params;
    const game = gameService.getGame(gameId);
  
    res.json(game);
  } catch(e) {
    console.error(e);
    res.sendStatus(404);
  }
}

// Routes
router.post("/", newGame);
router.post("/:gameId", joinGame);
router.get("/:gameId", getGame);

export default router;
