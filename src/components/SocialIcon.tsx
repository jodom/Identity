import * as React from 'react';
import './SocialIcon.css';

export interface IconProps {
  target: string,
  type: string,
}

export const SocialIcon = React.memo((props: IconProps) => {
  const { target, type } = props;
  return (
    <a target='blank_' href={target} className={'social-icon ' + type} ></a>
  );
});
