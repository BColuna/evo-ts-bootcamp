import React from "react";

type ConditionalProps = {
  // add here your random prop and its type
  children: React.ReactNode;
  enabled: boolean;
};

function Conditional(props: ConditionalProps) {
  /*Write a component that depends on the random prop,
     displays the children or not */
  const { children, enabled } = props;

  if (enabled) {
    return <div>{children}</div>;
  }

  return null;
}

export function App() {
  let enabled = false;

  return (
    <main>
      <h1>Conditional render</h1>
      <Conditional enabled={enabled}>
        <button>Enabled!</button>
      </Conditional>
      <Conditional enabled={!enabled}>
        <button>Disabled...</button>
      </Conditional>
    </main>
  );
}
