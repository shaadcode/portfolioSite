const Hero = () => {
  return (
    <section className="flex gap-4 flex-col relative items-center justify-center  h-[400px] md:h-[500px] lg:h-[800px] bg-[url('./../public/bgHero.png')] bg-center bg-no-repeat bg-cover">
      <h1 className="headerSite text-white font-black text-[26px] sm:text-[28px] text-center md:text-[40px]">
        سلام،
        <span className="text-[#F9CE34]"> سید مجتبی شاداب </span>
        هستم
      </h1>
      <span className="subHeaderSite text-[15px] sm:text-[18px] text-center md:text-lg font-light text-white">
        برنامه نویس و توسعه دهنده فرانت اند وب سایت
      </span>
      <div className=" w-full h-20 absolute bottom-0 bg-gradient-to-t from-[#0A101D] to-transparent"></div>
    </section>
  );
};

export default Hero;
