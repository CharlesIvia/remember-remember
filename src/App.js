import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/images/Gus.webp", matched: false },
  { src: "/images/Hank.jpeg", matched: false },
  { src: "/images/Jesse.webp", matched: false },
  { src: "/images/Saul.webp", matched: false },
  { src: "/images/Skyler.webp", matched: false },
  { src: "/images/Walt.webp", matched: false },
];

function App() {
  //state

  const [cards, setCards] = useState([]);

  //Duplicate and shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() };
      });

    setCards(shuffledCards);
  };

  console.log(cards);
  return (
    <div className="App">
      <h2>Breaking Bad Memory Game</h2>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid"></div>
    </div>
  );
}

export default App;
