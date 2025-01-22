"use client";
import clsx from "clsx";
import React, { useState } from "react";

const CardStack = ({ imageSources }: { imageSources: string[] }) => {
  const [cards, setCards] = useState(imageSources);

  const handleCardClick = () => {
    // Rotate the cards: Move the top card to the bottom
    const updatedCards = [...cards];
    const topCard = updatedCards.shift();
    if (topCard) {
      updatedCards.push(topCard);
      setCards(updatedCards);
    }
  };
  return (
    <div className="relative w-60 h-80 group">
      {cards.slice(0, 3).map((src, index) => (
        <div
          key={index}
          className={clsx(
            "absolute inset-0 flex-center bg-white rounded-lg shadow-lg p-1",
            "transition-transform duration-300 origin-bottom cursor-pointer",
            {
              "z-30 -rotate-3 group-hover:-rotate-6": index % 3 === 0,
              "z-20 rotate-3 -translate-y-10 hover:-translate-y-20":
                index % 3 === 1,
              "z-10 rotate-6 group-hover:rotate-12 -translate-y-20 hover:-translate-y-32":
                index % 3 === 2,
            }
          )}
          onClick={handleCardClick}
        >
          <img
            src={src}
            alt={`Card ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
