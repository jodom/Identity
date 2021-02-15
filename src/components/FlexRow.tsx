import * as React from "react";

interface FlexRowProps {
  children: React.ReactNode[];
}

export const FlexRow = React.memo(({ children }: FlexRowProps) => {
  return <div style={flexRowStyles}>{children}</div>;
});

const flexRowStyles = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "space-evenly",
};
