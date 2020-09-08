import React from 'react';

import { StatusBar } from '../StatusBar/StatusBar';

import './Game.css';

export function Game() {
  return (
    <main className="game">
      <section className="opponent">
        <StatusBar isYou={false} deckSize={23} handSize={7} actionsCount={4} />
        <section className="battle-line"></section>
      </section>
      <section className="you">
        <section className="battle-line"></section>
        <StatusBar isYou={true} deckSize={23} handSize={7} actionsCount={4} />
        <section className="workshop">
          <section className="hand"></section>
        </section>
      </section>
    </main>
  );
}
