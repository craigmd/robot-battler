import React from 'react';

import { Blueprints } from '../Blueprints/Blueprints';
import { Hand } from '../Hand/Hand';
import { Board } from '../Board/Board';
import { DeckHolster } from '../DeckHolster/DeckHolster';

import './Game.css';

export function Game() {
  return (
    <main className="game">
      <Blueprints />
      <div className="inner">
        <Hand />
        <Board />
        <Hand isYou />
      </div>
      <DeckHolster />
    </main>
  );
}
