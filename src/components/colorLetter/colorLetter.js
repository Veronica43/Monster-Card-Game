import "./colorLetter.css";

const ColorLetter = ({color, letter})=> {
    const style={backgroundColor: color};
    return (
    <div className="_letterContainer" style={style}>{letter.toUpperCase()} </div>);
};

export default ColorLetter;