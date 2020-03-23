const startButton = document.getElementById("start");

startButton?.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8000/game/start",
      { method: "GET", headers: { "Content-Type": "application/json" }
  });
  const game = await res.json();
  console.log(game);
});
