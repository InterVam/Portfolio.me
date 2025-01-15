import React, { useEffect, useState } from "react";
import "../Style/positionStyle.css";


const Position = ({ words, colors, style }) => {
  const [visible, setVisible] = useState(true);
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const updateText = () => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(1);
          setLetterCount(1);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          setWaiting(false);
        }, 1000);
      } else if (letterCount === words[currentWordIndex].length + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount(letterCount - 1);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount(letterCount + x);
      }
    };

    const intervalId = setInterval(updateText, 120);

    return () => clearInterval(intervalId);
  }, [letterCount, waiting, x, currentWordIndex, words]);

  useEffect(() => {
    const underscoreBlink = setInterval(() => {
      setVisible((prev) => !prev);
    }, 400);

    return () => clearInterval(underscoreBlink);
  }, []);

  return (
    <div className="console-container" style={style}>
      <span
        id="text"
        style={{
          color: colors ? colors[currentWordIndex % colors.length] : "#fff",
        }}
      >
        {words[currentWordIndex].substring(0, letterCount)}
      </span>
      <div
        id="console"
        className={`console-underscore ${visible ? "" : "hidden"}`}
      >
        &#95;
      </div>
    </div>
  );
};

export default Position;
