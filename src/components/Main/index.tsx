import React from "react";
const Main = ({ children }: { children?: JSX.Element }) => {
  return (
    <main>
      <h1>Hi, Main!</h1>
      {children}
    </main>
  );
};
export default Main;
