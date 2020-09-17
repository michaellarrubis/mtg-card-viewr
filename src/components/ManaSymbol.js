import React from "react";

// All Mana icons can be found here
// https://andrewgioia.github.io/Mana/icons.html
// the class names and attributes can be found here:
// https://andrewgioia.github.io/Mana/attributes.html
const ManaSymbol = ({ mana }) => {
  mana = mana?.replace(/[{}]/g, '');
  let manaArr = [];
  if (mana?.length > 0) {
    for (let i = 0; i < mana.length; i++) {
      manaArr.push(mana[i].toLowerCase());
    }
  }

  return (
    <div className="mana">
      {manaArr?.map((m, index) => (
        <span key={index} className={`ms ms-${m} ms-cost`} />
      ))}
    </div>
  );
};

export default ManaSymbol;
