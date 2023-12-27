import { technologiesIcon } from "@/constants/constants";
import Image from "next/image";

const Technologies = () => {
  return (
    <section className="max-w-[1140px] mx-auto px-5 md:my-24">
      <header>
        <h2 className="headerTechSection text-white font-black text-[26px] sm:text-[28px] text-center md:text-[40px]">
          تکنولوژی هایی که در صورت نیاز از اون ها استفاده میکنم!
        </h2>
      </header>
      <ul className="technoFonts flex justify-center items-center flex-row-reverse flex-wrap gap-5 mt-10 text-white">
        {technologiesIcon.map((Technology) => (
          <li
            key={Technology.id}
            className="w-1/3 sm:w-1/4 md:w-1/5 flex p-5 h-16 bg-[#1B212B] rounded-xl items-center justify-around md:justify-center text-xs lg:text-lg cursor-pointer  gap-x-2 md:gap-x-5"
          >
            <div>
              <h4>{Technology.title}</h4>
            </div>
            <div>
              <Image
                className="min-w-5 max-w-7 lg:max-w-10 object-contain"
                src={Technology.image}
                alt={Technology.title}
                width={40}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
