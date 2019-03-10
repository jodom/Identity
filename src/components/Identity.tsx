import * as React from 'react';
import './Identity.css';

import { Profile, ProfileProps } from './Profile';

const profileProps: ProfileProps = {
  name: '',
  image: {
    url: 'https://res.cloudinary.com/dzx2hnetf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1552174621/identity/profile.jpg',
    alt: 'profile picture'
  },
  tagline: 'engineer | art | software'
};

export const Identity  = React.memo(() => {
  return (
    <div className='identity'>
      <Profile {...profileProps}/>
      <div className='social-well'>
        <a target='blank_' href='https://github.com/jodom' className='fa fa-github'>Github</a>
        <a target='blank_' href='https://linkedin.com/in/konukojodom' className='fa fa-linkedin'>LinkedIn</a>
        <a target='blank_' href='https://twitter.com/@konuko_j' className='fa fa-twitter'>Twitter</a>
      </div>
      <div className='blog-cta'>
        <a target='blank_' href='https://medium.com/konuko_j'>READ MY MUSINGS</a>
      </div>
    </div>
  );
});
