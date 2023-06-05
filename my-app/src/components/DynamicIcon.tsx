'use client'
import React, { useState, useEffect } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import Link from "next/link";

const DynamicIcon = () => {
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState(1);
  const [shakeCount, setShakeCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setRotation((prevRotation) => prevRotation + 6 * direction);

        if (rotation === 6 || rotation === -6) {
          setDirection((prevDirection) => -prevDirection);
          setShakeCount((prevShakeCount) => prevShakeCount + 1);
        }


        //número de vibrações
        if (shakeCount === 10) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setShakeCount(0);
          }, 3000); // Pausa de 3 segundos antes de retomar o movimento
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [rotation, direction, shakeCount, isPaused]);

  return (
    <div className="fixed left-20 bottom-20 w-6 h-6 z-10">
      <Link href="/">
          <FiPhoneCall
            size={50}
            className="origin-center transform text-yellow-500"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
      </Link>
    </div>
  );
};

export default DynamicIcon;
