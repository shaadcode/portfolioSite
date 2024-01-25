import { useTechnologies } from '@/constants/constants';
import TechItem from './TechItem';

const Technologies = () => {
  return (
    <section id="technologies" className="sectionWidth snap-start px-5 md:my-24">
      <header>
        <h2 className="headerTechSection text-center text-[26px] font-black text-white sm:text-[28px] md:text-[40px]">
          تکنولوژی هایی که در صورت نیاز از اون ها استفاده میکنم!
        </h2>
      </header>
      <ul className="technoFonts flexCenter mt-10 flex-row-reverse flex-wrap gap-5 text-white">
        {useTechnologies.map(({ id, title, image }) => (
          <TechItem key={id} title={title} image={image} id={id} />
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
