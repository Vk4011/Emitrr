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
        } else {
          SetDefusserCount((p) => {
            p - 1;
          });
          console.log("bomb diffused..");
          console.log("Card drawn:", inHandCard);
          console.log(`\n\t[ ${deck.slice(0, -1)} ]\n`);
          setDeck((prevDeck) => prevDeck.slice(0, -1));
          setFrontCard((prevFrontCard) => prevFrontCard - 1);
          if (deck.length === 1) {
            console.log("\n\t You win the game!");
          }
        }
        break;
      case "🔀":
        console.log("Shuffling...");
        console.log(`\n\t old Deck :[${deck.slice(0, -1)}]`);
        console.log("\n\t New Deck ");
        generateDeck();
        setFrontCard(4);
        break;
      case "🙅‍♂️":
        SetDefusserCount((p) => {
          p + 1;
        });
        console.log("Defuser drawn:", inHandCard);
        console.log("\n\t Checking next card...");

        console.log("\n\t Game continues.");
        console.log(`\n\t[ ${deck.slice(0, -1)} ]\n`);
        setDeck((prevDeck) => prevDeck.slice(0, -1));
        setFrontCard((prevFrontCard) => prevFrontCard - 1);

        break;
      default:
        console.log("Card drawn:", inHandCard);
        console.log(`\n\t[ ${deck.slice(0, -1)} ]\n`);
        setDeck((prevDeck) => prevDeck.slice(0, -1));
        setFrontCard((prevFrontCard) => prevFrontCard - 1);
        if (deck.length === 1) {
          console.log("\n\t You win the game!");
        }
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div className="card-wrapper">
          <ul className="card-list">
            {deck.map((card, index) => (
              <li className="card-list__item }" key={index}>
                <div className="card">{card}</div>
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
