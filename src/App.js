import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";
import { useState, useEffect } from "react";
import players from "./players";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [footballplayers, setFootballPlayers] = useState(players);

  function handleChangePlayer(e) {
    const dataKey = e.target.getAttribute("data-key");
    markSelected(dataKey);
  }

  function markSelected(id) {
    setFootballPlayers(
      footballplayers.map((player) => {
        if (player.id == id) {
          if (player.isSelected) {
            resetGame();
            return player;
          } else {
            player.isSelected = true;
            addScore();
            return player;
          }
        } else {
          return player;
        }
      })
    );
  }

  function resetGame() {
    checkBestScore();
    resetPlayerStatus();
  }

  function resetPlayerStatus() {
    setFootballPlayers(
      footballplayers.map((player) => (player.isSelected = false))
    );
  }

  function checkBestScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      setCurrentScore(0);
    } else {
      setCurrentScore(0);
    }
  }

  function addScore() {
    setCurrentScore(currentScore + 1);
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    setFootballPlayers(shuffle(footballplayers));
  }, [footballplayers]);

  return (
    <div className="main">
      <Header />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <Game players={footballplayers} handleChangePlayer={handleChangePlayer} />
    </div>
  );
}

export default App;
