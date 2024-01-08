import Image from 'next/image';

type TtechItem = {
  title: string;
  image: SVGAElement | any;
  bgColor: string;
};

const TechItem = ({ title, image, bgColor }: TtechItem) => {
  return (
    <li className="relative flex h-16 w-1/3 cursor-pointer items-center justify-around gap-x-2 rounded-xl bg-[#1B212B] p-5 text-xs hover:bg-white hover:text-black sm:w-1/4 md:w-1/5 md:justify-center  md:gap-x-5 lg:text-lg">
      <div className={`absolute h-full w-full bg-${bgColor}`}></div>
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <Image
          className="min-w-5 max-w-7 object-contain lg:max-w-10"
          src={image}
          alt={title}
          width={40}
        />
      </div>
    </li>
  );
};

export default TechItem;
