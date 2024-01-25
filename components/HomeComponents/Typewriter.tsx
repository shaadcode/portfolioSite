import { useEffect, useState } from 'react';

const Typewriter = ({ userAnswer }: { userAnswer: string }) => {
  const [typedText, setTypedText] = useState('');
  let i = 0;

  useEffect(() => {
    setTypedText('');
    const writer = setInterval(async () => {
      if (i < userAnswer.length) {
        setTypedText((prev) => prev + userAnswer[i - 1]);
        i++;
      } else {
        clearInterval(writer);
      }
    }, 25);

    return () => clearInterval(writer);
  }, [userAnswer]);

  return <span>{typedText}</span>;
};

export default Typewriter;
