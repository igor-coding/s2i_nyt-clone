"use client";

import { useState } from "react";

export default function Fcc() {
  const [number, setNumber] = useState(0);

  function decrement() {
    setNumber(number - 5);
  }

  function increment() {
    setNumber(number + 5);
  }

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={decrement}>
        -5
      </button>
      <button type="button" onClick={increment}>
        +5
      </button>
    </>
  );
}
