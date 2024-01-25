import coverImg from '@/public/coverImg.jpg';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flexCenter h-[800px] snap-start flex-col px-5 md:px-14">
      <header>
        <h2 className="aboutmeHeader text-[35px] font-black text-white md:text-[40px]">
          من کی هستم؟!
        </h2>
      </header>
      <div className="flexCenter mt-20 flex-col gap-10 sm:gap-20 md:flex-row md:gap-24">
        <div className="cursor-pointer overflow-hidden rounded-3xl transition-all hover:rotate-3">
          <Image
            src={coverImg}
            alt="seyed mojtaba shadab"
            className="transition-all hover:scale-110"
            width={250}
            quality={100}
          />
        </div>
        <div className="aboutMeTexts relative h-56">
          <div>
            <p className="max-w-[450px] text-center text-base font-light leading-10 text-white sm:max-w-[600px] sm:text-[18px] md:text-justify lg:text-xl">
              سید مجتبی شاداب متولد خرداد 83 ساکن رشت علاقه مند به توسعه وب فرانت اند
              و مسلط به جدیدترین فناوری های فرانت مانند React.js و Next.js
            </p>
          </div>
          <div>
            <Link href={'#technologies'}>
              <button className="absolute bottom-0 mt-4 w-full rounded-lg bg-[#222A35] px-5 py-4 text-base font-bold text-white transition-shadow hover:shadow-3xl md:left-0 md:mt-0 md:w-fit md:py-2 md:text-lg">
                مهارت هام
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
