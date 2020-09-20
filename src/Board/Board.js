import React from 'react';

import { BattleLine } from './BattleLine/BattleLine';

import './Board.css';

export function Board() {
  return (
    <section className="board">
      <BattleLine />
      <BattleLine isYou />
    </section>
  );
}
