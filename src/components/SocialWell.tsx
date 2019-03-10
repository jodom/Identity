import * as React from 'react';
import './SocialWell.css';

import { SocialIcon, IconProps } from './SocialIcon';

const getIconList = (): JSX.Element[] => {
  return [
    <SocialIcon target='https://github.com/jodom' type='fa fa-github' />,
    <SocialIcon target='https://linkedin.com/in/konukojodom' type='fa fa-linkedin' />,
    <SocialIcon target='https://twitter.com/@konuko_j' type='fa fa-twitter' />,
  ]
}
export const SocialWell = React.memo(() => {
  const icons: JSX.Element[]  = getIconList();
  return (
    <div className='social-well'>
      {icons}
    </div>
  );
});
