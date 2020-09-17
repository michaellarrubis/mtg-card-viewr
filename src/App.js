import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./components/Button";
import Card from "./components/Card";
import Loader from "./components/Loader";

import "./assets/styles/styles.css";

import sunIcon from './assets/images/sun.png';
import moonIcon from './assets/images/moon.png';

const App = () => {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayMode, setDisplayMode] = useState(false);

  const getAllCards = async () => {
    setLoading(true);

    await axios.get("https://api.magicthegathering.io/v1/cards")
      .then(({ data }) => {
        setCards(data.cards)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const toggleDisplayMode = () => {
    setDisplayMode(!displayMode);
  }

  useEffect(() => {
    getAllCards();
  }, []);

  const getRandomCard = () => {
    setLoading(true);

    let randomCard = cards[Math.floor(Math.random() * cards.length)];

    setTimeout(() => {
      setCard(randomCard);
      setLoading(false);
    }, 500);
  }

  const displayLoader = loading ? <Loader displayMode={displayMode} /> : '';
  const displayCard = card ? <Card cardContent={card} /> : '';

  return (
    <div className={displayMode ? 'main dark-mode' : 'main'}>
      {displayLoader}

      <div className="content">
        <div className="mode">
          <img
            src={displayMode ? moonIcon : sunIcon}
            alt="Mode Icon"
            className="mode-icon"
            onClick={toggleDisplayMode} />
        </div>

        {displayCard}
        <Button onClick={getRandomCard}>Show Random Card</Button>
      </div>
    </div>
  );
};

export default App;
