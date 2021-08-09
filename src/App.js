import { useState } from "react";
import "./App.css";

import Hand from "./components/hand/hand";
import Logo from "./components/logo/logo";
import Pipo from "./components/assets/Pipo.png";
import Chuky from "./components/assets/Chuky.png";
import Lupo from "./components/assets/Lupo.png";
import Amenta from "./components/assets/Amenta.png";
import Bruce from "./components/assets/Bruce.png";
import Ephal from "./components/assets/Ephal.png";
import Gapi from "./components/assets/Gapi.png";
import Holof from "./components/assets/Holof.png";
import Livor from "./components/assets/Livor.png";
import Migo from "./components/assets/Migo.png";
import Zorgy from "./components/assets/Zorgy.png";
import Zual from "./components/assets/Zual.png";
import { ShuffleButton } from "./components/button/shuffleButton";

function App() {
  const handOfMonsters = [
    {
      name: "Pipo say:",
      color: "#F2DFDF",
      img: Pipo,
      task: "Wear your swimming suit and pretend you are swimming 😃 ",
    },

    {
      name: "Chuky say:",
      color: "#6BBABB3B",
      img: Chuky,
      task: "Exchange clothes with the person sitting on your left 😅 ",
    },
    {
      name: "Lupo say:",
      color: "#525FA754",
      img: Lupo,
      task: "Eat 1 teaspoon of mustard 😋 ",
    },
    {
      name: "Amenta say:",
      color: "teal",
      img: Amenta,
      task: "Gargle a song.Fill your mouth with water and try singing a song 😛 ",
    },
    {
      name: "Bruce say:",
      color: "red",
      img: Bruce,
      task: "Brush your teeth in front of everyone while dancing 🕺",
    },
    {
      name: "Ephal say:",
      color: "yellow",
      img: Ephal,
      task: "Imitate a monkey as best you can 🐒 ",
    },
    {
      name: "Gapi say:",
      color: "lime",
      img: Gapi,
      task: "Make up a story about the item to your right 🤓 ",
    },
    {
      name: "Holof say:",
      color: "aquamarine",
      img: Holof,
      task: "Smell everybody's feet and find 'the winner' 🤢 ",
    },
    {
      name: "Livor say:",
      color: "gray",
      img: Livor,
      task: "Let others paint on your face 🤡",
    },
    {
      name: "Migo say:",
      color: "silver",
      img: Migo,
      task: "Dance like a crazy 💃🏻 ",
    },
    {
      name: "Zorgy say:",
      color: "olive",
      img: Zorgy,
      task: "Wrap yourself in the toilet paper and take a selfie 🧻 ",
    },
    {
      name: "Zual say:",
      color: "#F2DFDF",
      img: Zual,
      task: "Go outside and scream from the top of your lungs 🗣 ",
    },
  ];

  const [shuffled, setShuffled] = useState(handOfMonsters);

  const handleShuffle = () => {
    const shuffle = handOfMonsters.sort(() => 0.5 - Math.random());
    setShuffled([...shuffle]);
  };

  return (
    <div className="App">
      <Logo />

      <Hand monsters={shuffled} />
      <ShuffleButton handleShuffle={handleShuffle} />
    </div>
  );
}

export default App;
