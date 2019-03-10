import * as React from 'react';
import './Identity.css';

import { Profile, ProfileProps } from './Profile';
import { SocialWell } from './SocialWell';
import { BigButtonCTA } from './BigButtonCTA';

const profileProps: ProfileProps = {
  name: 'Konuko Jodom',
  image: {
    url: 'https://res.cloudinary.com/dzx2hnetf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1552174621/identity/profile.jpg',
    alt: 'profile picture'
  },
  tagline: 'software engineer'
};

export const Identity  = React.memo(() => {
  return (
    <div className='identity'>
      <Profile {...profileProps} />
      <SocialWell />
      <BigButtonCTA />
    </div>
  );
});
