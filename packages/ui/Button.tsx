import * as React from "react";

export const Button: React.ComponentPropsWithoutRef<"button"> = ({ children, ...rest }) => {
  return <button  {...rest} className="p-8">{children}</button>;
};
