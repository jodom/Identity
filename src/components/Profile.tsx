import * as React from "react";
import "./Profile.css";

export interface ProfileProps {
  name: string;
  image: {
    url: string;
    alt: string;
  };
  tagline: string;
}

export const Profile = React.memo((props: ProfileProps) => {
  const { name, image, tagline } = props;
  return (
    <div className="profile">
      <div className="avatar">
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="caption">
        <span className="name">{name}</span>
        <span className="tagline">{tagline}</span>
      </div>
    </div>
  );
});
