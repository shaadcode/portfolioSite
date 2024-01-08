import { useTechnologies } from '@/constants/constants';
import TechItem from './TechItem';

const Technologies = () => {
  return (
    <section className="mx-auto max-w-[1140px] snap-start px-5 md:my-24">
      <header>
        <h2 className="headerTechSection text-center text-[26px] font-black text-white sm:text-[28px] md:text-[40px]">
          تکنولوژی هایی که در صورت نیاز از اون ها استفاده میکنم!
        </h2>
      </header>
      <ul className="technoFonts mt-10 flex flex-row-reverse flex-wrap items-center justify-center gap-5 text-white">
        {useTechnologies.map((tech) => (
          <TechItem
            key={tech.id}
            title={tech.title}
            image={tech.image}
            bgColor={tech.color}
          />
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
