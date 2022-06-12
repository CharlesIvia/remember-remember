import { useEffect, useState } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard";

const cardImages = [
  { src: "/images/Gus.webp", matched: false },
  { src: "/images/Hank.webp", matched: false },
  { src: "/images/Jesse.webp", matched: false },
  { src: "/images/Saul.webp", matched: false },
  { src: "/images/Skyler.webp", matched: false },
  { src: "/images/Walt.webp", matched: false },
];

function App() {
  //state
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);

  //Duplicate and shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() };
      });

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handleChoice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare two selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choice and increment turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  //start game automatically

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h2>Breaking Bad Memory Game</h2>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
