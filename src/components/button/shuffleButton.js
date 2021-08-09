import "./shuffleButton.css";

export const ShuffleButton = ({ handleShuffle }) => {
  return (
    <div className="play_game">
      <p>Press the button and have fun with your friends!</p>

      <button className="_button" onClick={handleShuffle}>
        Random hand
      </button>
    </div>
  );
};
