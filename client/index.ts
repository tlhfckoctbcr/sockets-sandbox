const urlParams = new URLSearchParams(window.location.search);

async function newGame(e: Event) {
  e.preventDefault();

  const form = {
    playerName: (<HTMLInputElement>document.getElementById("newPlayerName"))?.value
  };

  const res = await fetch(
    "http://localhost:8000/game", 
    { 
      method: "POST", 
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  const game = await res.json();
  window.location.assign(`?gameId=${game.id}`);
}

async function joinGame(e: Event) {
  e.preventDefault();

  const gameId = urlParams.get("gameId");
  if (!gameId) return;

  const form = {
    playerName: (<HTMLInputElement>document.getElementById("joinPlayerName"))?.value
  };

  const res = await fetch(
    `http://localhost:8000/game/${gameId}`, 
    { 
      method: "POST", 
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  const game = await res.json();
}

const newPlayerForm = document.getElementById("newGame");
newPlayerForm?.addEventListener("submit", newGame);

const joinPlayerForm = document.getElementById("joinGame");
joinPlayerForm?.addEventListener("submit", joinGame);

(async () => {
  const gameId = urlParams.get("gameId");
  if (!gameId) return;

  const res = await fetch(
    `http://localhost:8000/game/${gameId}`, 
    { 
      method: "GET", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  if (res.status === 404) {
    window.location.replace("/"); 
  } else {
    const game = await res.json();
    console.log("Active Game: ", game);
  }
})();
