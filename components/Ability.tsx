import { abilitys } from "@/constants/constants";

const Ability = () => {
  return (
    <section className="TextsAbility flex flex-col items-center justify-center my-32 px-5 md:px-10">
      <header className="abilityHeader">
        <h2 className="text-white font-black text-[35px] md:text-[40px]">
          ویژگی
          <span className="text-[#ffc000]"> سایت </span>
          های طراحی شده...
        </h2>
      </header>
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10 mt-10 justify-center flex-wrap max-w-[1140px]">
        {abilitys.map((ability) => (
          <div
            className={`${
              ability.id % 2 === 0 ? "hover:rotate-3" : "hover:-rotate-3"
            } hover:border-[#ffc000] border-2 border-[#222A35] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative transition-all bg-[#1B212B] px-5 py-10 h-52 md:h-80 flex-col gap-5 flex items-center justify-start text-white rounded-2xl`}
            key={ability.id}
          >
            <h3 className="text-center font-bold text-lg md:text-2xl">
              {ability.title}
            </h3>
            <p className="text-justify text-sm md:text-base font-extralight">
              {ability.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ability;
