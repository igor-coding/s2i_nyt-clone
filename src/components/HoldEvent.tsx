import React, { useState, useRef } from "react";

const HoldButton = () => {
  const [isHolding, setHolding] = useState(false);
  const holdTimeoutRef = useRef(null);

  const handleMouseDown = () => {
    setHolding(true);

    holdTimeoutRef.current = setTimeout(() => {
      activateButton();
    }, 1000);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeoutRef.current);

    setHolding(false);
  };

  const activateButton = () => {
    console.log("Button activated!");
  };

  return (
    <button
      type="button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle case where mouse leaves the button while holding
    >
      {isHolding ? "Holding..." : "Hold Me"}
    </button>
  );
};

export default HoldButton;
