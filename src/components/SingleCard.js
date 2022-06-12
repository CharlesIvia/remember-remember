import "./SingleCard.css";

export const SingleCard = ({ card, handleChoice, flipped }) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="./images/cover.jpeg"
          alt="cover"
          width="146"
          height="196"
          onClick={() => {
            handleChoice(card);
          }}
        />
      </div>
    </div>
  );
};
