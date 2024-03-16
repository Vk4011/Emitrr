import React, { useEffect, useState } from "react";
import "./Playground.css";

function Playground() {
  const [deck, setDeck] = useState([]);
  const [frontCard, setFrontCard] = useState(4);
  const cardTypes = ["😼", "💣", "🙅‍♂️", "🔀"];
  const [defuserCount, SetDefusserCount] = useState(0);
  useEffect(() => {
    generateDeck();
  }, []);

  const generateDeck = () => {
    let newDeck = [];
    for (let i = 0; i < 5; i++) {
      newDeck.push(getRandomCard());
    }
    console.log(`\n\t[ ${newDeck} ]\n`);
    setDeck(newDeck);
  };

  const getRandomCard = () => {
    let index = Math.floor(Math.random() * 4);
    return cardTypes[index];
  };

  const removeCard = () => {
    let inHandCard = deck[frontCard];

    switch (inHandCard) {
      case "💣":
        if (defuserCount <= 0) {
          console.log(`\n\t BOOM : 💣 \n`);
          console.log("Game over");
          window.alert("\n\t Game over \n\t 💣 BOOM 💣 \n\t Game over");
          return; // Exiting the function immediately after game over
        } else {
          SetDefusserCount((prevCount) => prevCount - 1); // Decreasing defuser count
          console.log("Bomb defused..");
        }
        break;
      case "🔀":
        console.log("Shuffling...");
        console.log(`\n\t old Deck :[${deck.slice(0, -1)}]`);
        console.log("\n\t New Deck ");
        generateDeck();
        setFrontCard(4);
        return; // Exiting the function after shuffling
      case "🙅‍♂️":
        SetDefusserCount((prevCount) => prevCount + 1); // Increasing defuser count
        console.log("Defuser drawn:", inHandCard);
        console.log("\n\t Checking next card...");
        console.log("\n\t Game continues.");
        break;
      default:
        console.log("Card drawn:", inHandCard);
        if (deck.length === 1) {
          console.log("\n\t You win the game!");
          window.alert("\n\t You win the game!");
        }
        break;
    }

    console.log(`\n\t[ ${deck.slice(0, -1)} ]\n`);
    setDeck((prevDeck) => prevDeck.slice(0, -1));
    setFrontCard((prevFrontCard) => prevFrontCard - 1);
  };

  return (
    <>
      <div className="container">
        <div clas
        sN
        me="card-wrapper">
          <ul className="card-list">
            {deck.map((card, index) => (
              <li className="card-list__item }" key={index}>
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <p className="text-[5rem]">♦️</p>
                    </div>
                    <div className="card-back">
                      <p className="text-[6rem]">{card}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={removeCard} className="button btn-shuffle">
          Draw Card
        </button>
      </div>
    </>
  );
}

export default Playground;
