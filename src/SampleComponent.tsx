import { useEffect, useRef, useState } from "react";

const styles = {
  cool: "cool_style",
};

export default () => {
  const firstDiv = useRef<HTMLDivElement>(null);

  const [txt, setTxt] = useState("bo");

  useEffect(() => {
    const interval = setInterval(() => {
      setTxt((prev) => prev + "o");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // add the "bling" class from the first div
      firstDiv.current?.classList.add(styles.cool);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div ref={firstDiv}>{txt}</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>E</div>
      <div>F</div>
    </div>
  );
};
