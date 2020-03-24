async function newGame(e: Event) {
  e.preventDefault();

  const form = {
    playerName: (<HTMLInputElement>document.getElementById("playerName"))?.value
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

const form = document.getElementById("newGame");
form?.addEventListener("submit", newGame);

