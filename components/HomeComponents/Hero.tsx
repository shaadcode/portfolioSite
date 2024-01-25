const Hero = () => {
  return (
    <section className="flexCenter relative h-[400px] snap-start flex-col gap-4 bg-[url('./../public/bgHero.png')] bg-cover bg-center bg-no-repeat md:h-[500px] lg:h-[800px]">
      <h1 className="headerSite text-center text-[26px] font-black text-white sm:text-[28px] md:text-[40px]">
        سلام،
        <span className="text-[#F9CE34]"> سید مجتبی شاداب </span>
        هستم
      </h1>
      <span className="subHeaderSite text-center text-[15px] font-light text-white sm:text-[18px] md:text-lg">
        برنامه نویس و توسعه دهنده فرانت اند وب سایت
      </span>
      <div className=" absolute bottom-0 h-20 w-full bg-gradient-to-t from-[#0A101D] to-transparent"></div>
    </section>
  );
};

export default Hero;
