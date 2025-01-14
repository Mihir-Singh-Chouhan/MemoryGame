import React, { useState, useEffect } from 'react';
import './index.css'; // Optional: for styling

const cardImages = [
  { id: 1, img: './images/angular.png' },
  { id: 2, img: './images/css.png' },
  { id: 3, img: './images/html.png' },
  { id: 4, img: './images/js.png' },
  { id: 5, img: './images/nodejs.png' },
  { id: 6, img: './images/react.png' },
  { id: 7, img: './images/scss.png' },
  { id: 8, img: './images/vue.png' },
];

// Shuffle the cards
const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5);

const MemoryCardGame = () => {
  const [cards, setCards] = useState(shuffledCards.map((card, index) => ({ ...card, flipped: false, id: index })));
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showingImages, setShowingImages] = useState(true);

  useEffect(() => {
    // Show all images for 2 seconds
    const timer = setTimeout(() => {
      setShowingImages(false);
      setCards(prevCards => prevCards.map(card => ({ ...card, flipped: false })));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      // Increment attempts when two cards are flipped
      setAttempts(prevAttempts => prevAttempts + 1);
      
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.img === secondCard.img) {
        // Cards match
        setScore(prevScore => prevScore + 1);
        setCards(prevCards => prevCards.map(card => 
          card.img === firstCard.img ? { ...card, flipped: true } : card
        ));
      } else {
        // Cards do not match, flip them back after a short delay
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card => 
            card.id === firstCard.id || card.id === secondCard.id ? { ...card, flipped: false } : card
          ));
        }, 1000);
      }

      // Clear flipped cards after processing
      setFlippedCards([]);
    }
  }, [flippedCards]);

  const handleCardClick = (card) => {
    if (!card.flipped && flippedCards.length < 2 && !showingImages) {
      setCards(prevCards => prevCards.map(c => (c.id === card.id ? { ...c, flipped: true } : c)));
      setFlippedCards(prev => [...prev, card]);
    }
  };

  return (
    <div className="memory-card-game">
      <h1>Memory Card Game</h1>
      <p>Score: {score}</p>
      <p>Attempts: {attempts}</p>
      <div className="card-grid">
        {cards.map(card => (
          <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''}`} onClick={() => handleCardClick(card)}>
            {card.flipped || showingImages ? <img src={card.img} alt="Card" /> : <div className="card-back">?</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryCardGame;
