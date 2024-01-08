import { useEffect, useState } from 'react';

const Typewriter = ({ userAnswer }: { userAnswer: string }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');

    let i = 0;
    const writer = setInterval(() => {
      setTypedText((prev) => prev + userAnswer[i - 1]);
      ++i;
      if (i === userAnswer.length) {
        clearInterval(writer);
      }
    }, 25);

    return () => {
      clearInterval(writer);
    };
  }, [userAnswer]);

  return <span>{typedText}</span>;
};

export default Typewriter;
