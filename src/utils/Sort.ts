import { Player } from "../types/Player";

export const mockPlayers: Player[] = [
  { id: 1, name: "Magnus Carlsen", elo: 2850 },
  { id: 2, name: "Hikaru Nakamura", elo: 2780 },
  { id: 3, name: "Alireza Firouzja", elo: 2765 },
  { id: 4, name: "Fabiano Caruana", elo: 2800 },
  { id: 5, name: "Ian Nepomniachtchi", elo: 2785 },
]

function sort(players: Player[]): Player[] {
  let pileIncreasingOrder: Player[] = [];
  let pileIntruder:Player[] = [];

  let lastElo = players[0].elo;
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (player.elo >= lastElo) {
      pileIncreasingOrder.push(player);
      lastElo = player.elo;
    } else {
      pileIntruder.push(player);
    }
    }

  return [...players];
}
export default sort