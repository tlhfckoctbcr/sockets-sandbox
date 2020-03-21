import express, { Request, Response } from "express";

import gameService from "./game.service";

const router = express.Router();

async function startGame(req: Request, res: Response): Promise<void> {
  try {
    const newGame = await gameService.startGame();
    res.json(newGame);
  } catch(e) {
    console.error(e);
  }
}

// Routes
router.get("/start", startGame);
export default router;
