'use client';
import { useState } from 'react';

import SwiperContainer from './SwiperContainer';
import { questions } from '@/constants/constants';
import DedicatedQuestion from './DedicatedQuestion';
import ChatbotDisplay from './ChatbotDisplay';

const Chatbot = () => {
  // Hooks
  const [selectQuestion, setSelectQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>();

  const getAnswer = (questionForGetAnswer: number) => {
    const finallAnswer = questions.find((getAnswer) => {
      return getAnswer.id === questionForGetAnswer;
    });
    setAnswer(finallAnswer?.answer);
  };

  const handleQuestion = (question: string, id: number) => {
    setSelectQuestion('');
    getAnswer(id);
    setSelectQuestion(question);
  };

  return (
    <section className="abilityHeader flexCenter my-32 snap-end flex-col gap-5 px-5">
      <header>
        <h2 className="mb-5 text-[40px] font-black text-white">گفت و گویی کوتاه!</h2>
        <span className="font-light text-white">
          در بخش زیر به سوالات متداولتون پاسخ دادم
        </span>
      </header>

      <ChatbotDisplay selectQuestion={selectQuestion} answer={answer} />
      <div className="w-[350px] md:w-[600px] lg:w-[800px]">
        <SwiperContainer handleQuestion={handleQuestion} />
      </div>
      <DedicatedQuestion />
    </section>
  );
};

export default Chatbot;
