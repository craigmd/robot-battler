import React from 'react';

import './StatusBar.css';

export function StatusBar({ isYou, deckSize, handSize, actionsCount }) {
  return (
    <section className="status-bar">
      <div className="actions-left">
        {isYou ? (
          <button
            className="button action"
            type="button"
            name="draw"
            onClick={() => console.log('draw')}
          >
            Draw
          </button>
        ) : null}
      </div>
      <div className="status-center">
        <p className="deck-size">Deck: {deckSize}</p>
        <p className="hand-size">Hand: {handSize}</p>
        <p className="action-count">Actions: {actionsCount}</p>
      </div>
      <div className="actions-right">
        {isYou ? (
          <button
            className="button action"
            type="button"
            name="end-turn"
            onClick={() => console.log('end turn')}
          >
            End turn
          </button>
        ) : null}
      </div>
    </section>
  );
}
