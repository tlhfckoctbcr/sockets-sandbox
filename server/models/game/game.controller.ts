import express, { Request, Response } from "express";

import gameService from "./game.service";

const router = express.Router();

async function newGame(req: Request, res: Response): Promise<void> {
  try {
    const { playerName } = req.body;
    const newGame = await gameService.newGame(playerName);
    res.json(newGame);
  } catch(e) {
    console.error(e);
  }
}

// Routes
router.post("/", newGame);
export default router;
