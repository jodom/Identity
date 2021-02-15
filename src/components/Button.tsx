import * as React from "react";
import "./Button.css";

interface ButtonProps {
  link: string;
  label: string;
}

export const Button = React.memo(({ link, label }: ButtonProps) => {
  return (
    <div className="button">
      <a target="blank_" href={link} className="button-link" aria-label={label}>
        {label}
      </a>
    </div>
  );
});
