import coverImg from "@/public/coverImg.jpg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[800px] px-5 md:px-14">
      <header>
        <h2 className="aboutmeHeader text-white font-black text-[35px] md:text-[40px]">
          من کی هستم؟!
        </h2>
      </header>
      <div className="flex-col md:flex-row flex justify-center items-center gap-10 sm:gap-20 md:gap-24 mt-20">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={coverImg}
            alt="seyed mojtaba shadab"
            width={250}
            quality={100}
          />
        </div>
        <div className="aboutMeTexts relative h-56">
          <div>
            <p className="text-white font-light max-w-[450px] text-center sm:max-w-[600px] leading-10 md:text-justify text-base sm:text-[18px] lg:text-xl">
              سید مجتبی شاداب متولد خرداد 83 ساکن رشت علاقه مند به توسعه وب
              فرانت اند و مسلط به جدیدترین فناوری های فرانت مانند React.js و
              Next.js
            </p>
          </div>
          <div>
            <button className="w-full md:w-fit text-white text-base md:text-lg absolute transition-shadow hover:shadow-3xl bottom-0 md:left-0 mt-4 md:mt-0 px-5 py-4 md:py-2 bg-[#222A35] rounded-lg font-bold">
              مهارت هام
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
