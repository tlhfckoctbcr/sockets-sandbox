import Player from "./Player";

export enum MessageType {
  Join,
  Ready
}

export interface Message {
  type: MessageType;
  gameId?: string;
  player?: Player;
}

export class PlayerJoinedMsg implements Message {
  type: MessageType = MessageType.Join;
  gameId: string = "";
  player: Player;
}
