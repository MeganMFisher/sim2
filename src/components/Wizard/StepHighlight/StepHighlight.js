import React from 'react';

import active from '../../../assets/step_active.png';
import inactive from '../../../assets/step_inactive.png';
import completed from '../../../assets/step_completed.png';

import './StepHighlight.css';

export default function StepHighlight({ step }) {
  console.log( step, typeof( step ) );

  const src = {
    one: 1 < step ? completed : 1 === step ? active : inactive,
    two: 2 < step ? completed : 2 === step ? active : inactive,
    three: 3 < step ? completed : 3 === step ? active : inactive,
    four: 4 < step ? completed : 4 === step ? active : inactive,
    five: 5 < step ? completed : 5 === step ? active : inactive
  };

  return (
    <div className="StepHighlight__container">
      <img src={ src.one } alt="inactive" />
      <img src={ src.two } alt="inactive" />
      <img src={ src.three } alt="inactive" />
      <img src={ src.four } alt="inactive" />
      <img src={ src.five } alt="inactive" />
    </div>
  );
}