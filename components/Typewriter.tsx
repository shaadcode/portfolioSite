import { useEffect, useState } from "react";

const Typewriter = ({ text }: { text: string }) => {
  const splitedText = text.split("");
  const [typeText, setTypeText] = useState<string>("");

  useEffect(() => {
    setTypeText("");

    //     let i = 0;
    // const interval = setInterval(() => {
    //   if (i < splitedText.length) {
    //     console.log(splitedText[i]);
    //     setTypeText((prev) => prev + splitedText[i]);
    //     i = i + 1;
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 50);

    // return () => {
    //   clearInterval(interval);
    // };

    let i = 0;
    const interval = setInterval(() => {
      if (i < splitedText.length) {
        setTypeText((prev) => prev + splitedText[i - 1]);
        i = i + 1;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <span>{typeText}</span>;
};

export default Typewriter;
