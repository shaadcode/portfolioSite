'use client';
import Image from 'next/image';
import { TextareaHTMLAttributes, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { questions } from '@/constants/constants';
import profileImage from '@/public/profileChat.jpg';
import Typewriter from './Typewriter';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Chatbot = () => {
  // Hooks
  const [selectQuestion, setSelectQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>();
  const [isDisable, setIsDisable] = useState(false);
  const textAreaContent = useRef<HTMLTextAreaElement>(null);

  // functions
  const getAnswer = async (questionForGetAnswer: number) => {
    const finallAnswer = await questions.find((getAnswer) => {
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
    <section className="abilityHeader mx-auto my-32 flex max-w-[1140px] snap-end flex-col items-center justify-center gap-5 px-5">
      <header>
        <h2 className="mb-5 text-[40px] font-black text-white">گفت و گویی کوتاه!</h2>
        <span className="font-light text-white">
          در بخش زیر به سوالات متداولتون پاسخ دادم
        </span>
      </header>
      <div className="h-[400px] w-[350px] rounded-3xl bg-[#222A35] p-2 md:w-[600px] lg:w-[800px]">
        <div className="relative flex  h-full w-full select-none flex-col justify-end overflow-hidden rounded-2xl bg-white p-2 text-sm leading-7 md:p-5">
          <div
            className={`${
              selectQuestion ? 'hidden' : 'flex'
            } absolute h-full w-full items-center justify-center`}>
            <span className="animate-bounce pl-4 text-lg font-black text-[#222A35] md:text-3xl">
              از بخش زیر یک سوال را انتخاب کنید!
            </span>
          </div>
          <div
            className={`${
              selectQuestion ? 'translate-x-0' : 'translate-x-96'
            } ml-4 mt-auto w-fit  max-w-96 rounded-lg bg-[#ffc000] p-3 text-justify text-xs transition-all md:ml-0 md:text-sm`}>
            <span>{selectQuestion}</span>
          </div>
          <div
            className={`${
              answer ? 'translate-x-0' : '-translate-x-[600px]'
            } mr-auto flex w-fit flex-row-reverse py-3 pl-0 text-justify text-xs leading-5 transition-all md:text-sm`}>
            <div className="mr-1 md:mr-3">
              <Image
                src={profileImage}
                alt="profile"
                width={80}
                height={80}
                className="w-10 rounded-full md:w-14"
              />
            </div>
            <div className="w-fit max-w-[400px] rounded-lg bg-[#222A35] p-3 text-white md:w-[500px]">
              <Typewriter userAnswer={answer ?? ''} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] md:w-[600px] lg:w-[800px]">
        <div className="mt-8 flex flex-col items-center justify-center text-xl font-black text-white md:mt-12">
          <h2>سوالات متداول</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          className="text-white">
          {questions.map((item) => (
            <SwiperSlide
              key={item.id}
              className="my-auto cursor-pointer select-none text-center text-xs font-light hover:text-[#ffc000] md:text-sm"
              onClick={() => {
                handleQuestion(item.question, item.id);
              }}>
              {item.question}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <form
          action="/"
          method="post"
          className="flex flex-col items-center justify-center gap-4">
          <label className="flex flex-col items-center justify-center text-lg font-semibold text-white">
            اگر سوال خاصی دارید در بخش زیر وارد کنید!
            <textarea
              name="question"
              rows={7}
              cols={45}
              ref={textAreaContent}
              onChange={() => setIsDisable(textAreaContent.current?.value === '')}
              placeholder="بهتر است همراه با سوال ایمیل یا شماره تلفنتان را هم ارسال کنید!"
              className="mt-5 resize-none rounded-lg p-5 text-justify text-sm text-thirdColor	outline-none "
            />
          </label>
          <button
            disabled={isDisable}
            type="submit"
            className="rounded-md bg-thirdColor px-4 py-3 text-sm font-bold text-white">
            ارسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chatbot;
