import React from 'react';

import './Game.css';

export function Game() {
  return (
    <main className="game">
      <section className="opponent">
        <section className="status-bar">
          <div className="actions-left"></div>
          <div className="status-center">
            <p className="deck-size">Deck: 23</p>
            <p className="hand-size">Hand: 7</p>
            <p className="action-count">Actions: 4</p>
          </div>
          <div className="actions-right"></div>
        </section>
        <section className="battle-line"></section>
      </section>
      <section className="you">
        <section className="battle-line"></section>
        <section className="status-bar">
          <div className="actions-left">
            <button
              className="button action"
              type="button"
              name="draw"
              onClick={() => console.log('draw')}
            >
              Draw
            </button>
          </div>
          <div className="status-center">
            <p className="deck-size">Deck: 23</p>
            <p className="hand-size">Hand: 7</p>
            <p className="action-count">Actions: 4</p>
          </div>
          <div className="actions-right">
            <button
              className="button action"
              type="button"
              name="end-turn"
              onClick={() => console.log('end turn')}
            >
              End turn
            </button>
          </div>
        </section>
        <section className="workshop">
          <section className="hand"></section>
        </section>
      </section>
    </main>
  );
}
