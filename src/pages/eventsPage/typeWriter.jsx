import React, { useEffect, useRef, useState } from "react";

const Typewriter = ({ texts = [], period = 2000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText((prevText) =>
        isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1)
      );

      setDelta(isDeleting ? delta / 2 : delta);

      if (!isDeleting && text === fullText) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
        timeoutRef.current = setTimeout(handleType, delta);
      }
    };

    timeoutRef.current = setTimeout(handleType, delta);

    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, loopNum]);

  return (
    <h1>
      <span className="typewrite">
        <span className="wrap border-r-2 border-white pr-1">{text}</span>
      </span>
    </h1>
  );
};

export default Typewriter;
