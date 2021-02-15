import * as React from "react";
import "./SocialIcon.css";

export interface IconProps {
  target: string;
  icon: string;
  label: string;
}

export const SocialIcon = React.memo(({target, icon, label}: IconProps) => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a target="blank_" href={target} className={"social-icon " + icon}  aria-label={label} />;
});
