"use client";

import { useState, useEffect } from "react";
import indices from "@/data/indices";
import Icons from "@/components/ui/icons";

export default function Indices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % indices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeIndicator = indices[currentIndex].chg.includes("+")
    ? {
        textColor: "text-green-800 dark:text-green-500",
        icon: Icons.moveUp,
      }
    : {
        textColor: "text-red-800 dark:text-red-500",
        icon: Icons.moveDown,
      };

  return (
    <div className="flex flex-1 justify-end">
      <div key={indices[currentIndex].id} className="flex space-x-4">
        <span>{indices[currentIndex].index}</span>
        <div
          className={`flex space-x-1 items-center ${changeIndicator.textColor}`}
        >
          <span>{indices[currentIndex].chg}</span>
          <span>{changeIndicator.icon}</span>
        </div>
      </div>
    </div>
  );
}
