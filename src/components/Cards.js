/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import cardsData from "api/cards.json";
export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4 md:px-0 gap-4">
      {cards.length &&
        cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-14 rounded-lg shadow-sm flex flex-col text-center items-center"
          >
            <img className="w-[150px] h-[150px] mb-6" src={card.image} />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}
