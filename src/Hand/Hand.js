import React from 'react';
import classNames from 'classnames';

import { Card } from '../Card/Card';

import './Hand.css';

export function Hand({ cards = [], isYou }) {
  return (
    <section className={classNames('hand', { you: isYou })}>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
}
