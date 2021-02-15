import * as React from "react";
import "./Identity.css";

import { Profile, ProfileProps } from "./Profile";
import { Button } from "./Button";
import { FlexRow } from "./FlexRow";
import { SocialIcon } from "./SocialIcon";

const profileProps: ProfileProps = {
  name: "Konuko Jodom",
  image: {
    url:
      "https://res.cloudinary.com/dzx2hnetf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1552174621/identity/profile.jpg",
    alt: "profile picture",
  },
  tagline: "software engineer",
};

export const Identity = React.memo(() => {
  return (
    <div className="identity">
      <Profile {...profileProps} />
      <FlexRow>
        <SocialIcon
          target="https://github.com/jodom"
          icon="fa fa-github"
          label={"Navigates to GitHub"}
        />
        <SocialIcon
          target="https://linkedin.com/in/konukojodom"
          icon="fa fa-linkedin"
          label={"Navigates to LinkedIn"}
        />
        <SocialIcon
          target="https://twitter.com/@konuko_j"
          icon="fa fa-twitter"
          label="Navigates to Twitter"
        />
      </FlexRow>
      <FlexRow>
        <Button link={"https://calendly.com/konuko_j"} label={"calendar"} />
        <Button link={"https://medium.com/@konuko_j"} label={"writings"} />
      </FlexRow>
    </div>
  );
});

// cspell: ignore linkedin
