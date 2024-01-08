import { abilitys } from '@/constants/constants';

const Ability = () => {
  return (
    <section
      id="ability"
      className="TextsAbility my-32 flex snap-start flex-col items-center justify-center px-5 md:px-10">
      <header className="abilityHeader">
        <h2 className="text-[35px] font-black text-white md:text-[40px]">
          ویژگی
          <span className="text-[#ffc000]"> سایت </span>
          های طراحی شده...
        </h2>
      </header>
      <div className="mt-10 flex max-w-[1140px] flex-col flex-wrap items-center justify-center gap-4 sm:flex-row md:gap-10">
        {abilitys.map((ability) => (
          <div
            className={`${
              ability.id % 2 === 0 ? 'hover:rotate-3' : 'hover:-rotate-3'
            } relative flex h-52 w-full flex-col items-center justify-start gap-5 rounded-2xl border-2 border-[#222A35] bg-[#1B212B] px-5 py-10 text-white transition-all hover:border-[#ffc000] sm:w-1/2 md:h-80 md:w-1/3 lg:w-1/4`}
            key={ability.id}>
            <h3 className="text-center text-lg font-bold md:text-2xl">
              {ability.title}
            </h3>
            <p className="text-justify text-sm font-extralight md:text-base">
              {ability.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ability;
