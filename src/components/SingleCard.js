import "./SingleCard.css";

export const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <img className="front" src={card.src} alt="single card" />
      <img
        className="back"
        src="./images/cover.jpeg"
        alt="cover"
        width="146"
        height="196"
      />
    </div>
  );
};
