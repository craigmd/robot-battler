import React, { useState } from 'react';
import classNames from 'classnames';

import './Blueprints.css';

export function Blueprints() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={classNames('blueprints', { expanded: isExpanded })}>
      <BlueprintsExpander handleClick={setIsExpanded} />
    </section>
  );
}

function BlueprintsExpander({ handleClick }) {
  return (
    <button
      className="blueprints-expander"
      onClick={() => handleClick((prev) => !prev)}
    >
      Blueprints
    </button>
  );
}
