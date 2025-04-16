"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const MyConfetti = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState<number>(1000);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Confetti width={width} height={1000} />
      {children}
    </>
  );
};

export default MyConfetti;
