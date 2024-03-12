import React, { useEffect, useState } from "react";
import "./Playground.css";

function Playground() {
  const [deck, setDeck] = useState([]);
  const [frontCard, setFrontCard] = useState(4); 
  const cardTypes = ["😼", "💣", "🙅‍♂️", "🔀"];


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
        console.log(`\n\t BOOM : 💣 \n`);
        console.log("Game over");
        
        break;
      case "🔀":
        console.log("Shuffling...");
        console.log(`\n\t old Deck :[${deck.slice(0,-1)}]`);
        console.log("\n\t New Deck ")
        generateDeck(); 
        
        setFrontCard(4);
       
      
        break;
      default:
        console.log("Card drawn:", inHandCard);
        console.log(`\n\t[ ${deck.slice(0, -1)} ]\n`);
        setDeck((prevDeck) => prevDeck.slice(0, -1));
        setFrontCard((prevFrontCard) => prevFrontCard - 1);
        break;
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <ul className="card-list">
          {deck.map((card, index) => (
            <li className="card-list__item" key={index}>
              <div className="card">{card}</div>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <button onClick={removeCard} className="button btn-shuffle">
        Draw Card
      </button>
    </>
  );
}

export default Playground;
