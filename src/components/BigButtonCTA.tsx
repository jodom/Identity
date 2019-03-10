import * as React from 'react';
import './BigButton.css';

export const BigButtonCTA = React.memo(() => {
  return (
    <div className='blog-cta'>
      <a target='blank_' href='https://medium.com/@konuko_j' className='big-button'>READ MY MUSINGS</a>
    </div>
  );
});
