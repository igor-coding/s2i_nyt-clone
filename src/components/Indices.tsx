"use client";

import { useState, useEffect } from "react";
import indices from "@/data/indices";
import Icons from "@/components/ui/icons";

export default function Indices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % indices.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const textColor =
    indices[currentIndex].icon === Icons.moveUp
      ? "text-green-800 dark:text-green-500"
      : "text-red-800 dark:text-red-500";

  return (
    <div className="flex flex-1 justify-end">
      <div key={indices[currentIndex].id} className="flex space-x-4">
        <span>{indices[currentIndex].index}</span>
        <div className={`flex space-x-1 items-center ${textColor}`}>
          <span>{indices[currentIndex].chg}</span>
          <span>{indices[currentIndex].icon}</span>
        </div>
      </div>
    </div>
  );
}
