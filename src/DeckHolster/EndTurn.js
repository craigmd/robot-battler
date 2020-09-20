import React from 'react';

import './EndTurn.css';

export function EndTurn({ handleClick }) {
  return (
    <section className="end-turn">
      <button className="end-turn-button" type="button" onClick="handleClick">
        End Turn
      </button>
    </section>
  );
}
