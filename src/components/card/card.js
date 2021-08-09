import "./card.css";

const Card = ({ monster }) => {
  return (
    <div className="_cardContainer" style={{ backgroundColor: monster.color }}>
      <img src={monster.img} className="_card_image" alt="monster picture" />
      <span className="monster_name">{monster.name}</span>
      <br></br>
      <span>{monster.task}</span>
    </div>
  );
};

export default Card;
