"use client";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { questions } from "@/constants/constants";
import profileImage from "@/public/profileChat.jpg";
import Typewriter from "./Typewriter";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Chatbot = () => {
  // Hooks
  const [selectQuestion, setSelectQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>();

  // functions
  const getAnswer = async (questionForGetAnswer: number) => {
    const finallAnswer = await questions.find((getAnswer) => {
      return getAnswer.id === questionForGetAnswer;
    });
    setAnswer(finallAnswer?.answer);
  };
  const handleQuestion = (question: string, id: number) => {
    setSelectQuestion("");
    getAnswer(id);
    setSelectQuestion(question);
  };

  return (
    <section className="flex flex-col gap-7 items-center justify-center max-w-[1140px] mx-auto px-5 my-32 abilityHeader">
      <header>
        <h2 className="text-white font-black text-[40px] mb-5">
          گفت و گویی کوتاه!
        </h2>
        <span className="font-light text-white">
          در بخش زیر به سوالات متداولتون پاسخ دادم
        </span>
      </header>
      <div className="lg:w-[800px] md:w-[600px] w-[350px] h-[400px] p-2 bg-[#222A35] rounded-3xl">
        <div className="w-full h-full  select-none overflow-hidden text-sm leading-7 p-2 md:p-5 flex flex-col justify-end bg-white rounded-2xl relative">
          <div
            className={`${
              selectQuestion ? "hidden" : "flex"
            } w-full h-full absolute items-center justify-center`}
          >
            <span className="font-black pl-4 text-lg md:text-3xl animate-bounce text-[#222A35]">
              از بخش زیر یک سوال را انتخاب کنید!
            </span>
          </div>
          <div
            className={`${
              selectQuestion ? "translate-x-0" : "translate-x-96"
            } mt-auto ml-4 md:ml-0  text-justify w-fit max-w-96 p-3 text-xs md:text-sm rounded-lg transition-all bg-[#ffc000]`}
          >
            <span>{selectQuestion}</span>
          </div>
          <div
            className={`${
              answer ? "translate-x-0" : "-translate-x-[600px]"
            } mr-auto w-fit text-xs text-justify md:text-sm leading-5 py-3 pl-0 transition-all flex flex-row-reverse`}
          >
            <div className="mr-1 md:mr-3">
              <Image
                src={profileImage}
                alt="profile"
                width={80}
                height={80}
                className="w-10 md:w-14 rounded-full"
              />
            </div>
            <div className="w-fit md:w-[500px] p-3 rounded-lg bg-[#222A35] text-white">
              <Typewriter text={answer ?? ""} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[800px] md:w-[600px] w-[350px]">
        <div className="flex flex-col items-center justify-center mt-8 md:mt-12 text-white text-xl font-black">
          <h2>سوالات متداول</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          className="text-white"
        >
          {questions.map((item) => (
            <SwiperSlide
              key={item.id}
              className="hover:text-[#ffc000] cursor-pointer my-auto select-none text-xs md:text-sm font-light text-center"
              onClick={() => {
                handleQuestion(item.question, item.id);
              }}
            >
              {item.question}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Chatbot;
