import React from "react";

import ManaSymbol from "./ManaSymbol";

const Card = ({ cardContent }) => {
  let card = cardContent;
  const displayPowerToughness = card.power && card.toughness ? `${card.power}/${card.toughness}` : '';

  const displayCardText = (text) => {
    let textArr = text?.trim().split(/\s+/);
    if (textArr?.length > 0) {
      textArr.map((text, index) => {
        if (text.includes("{")) {
          let tempText = text.replace(/[{}]/g, '');
          tempText = tempText.split('');
          tempText.map((t, i) => {
            let regex = /^[a-z0-9]+$/i;
            if (t.match(regex)) {
              return tempText[i] = `<i class='ms ms-${t.toLowerCase()} ms-cost'></i>`
            }
            return
          })
          textArr[index] = tempText.join("")
        } else {
          textArr[index] = text
        }
        return
      })
    }
    return textArr.join(" ");
  }

  return (
    <div className="m-card">
      <div className="m-card-content">
        <div className="m-card-image" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
        <div className="m-card-details">
          <div className="m-card-row m-card-row-top">
            <p>{card.name}</p>
            <ManaSymbol mana={card.manaCost} />
          </div>
          <div className="m-card-row">
            <p>{card.type}</p>
          </div>
          <div className="m-card-row m-card-row-desc">
            <div dangerouslySetInnerHTML={{ __html: displayCardText(card.text) }} />
            <p>{displayPowerToughness}</p>
          </div>
          <div className="m-card-row">
            <p>Illustrated by: {card.artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
