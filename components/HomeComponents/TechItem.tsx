import { TtechItem } from '@/constants/types';
import classNames from 'classnames';
import Image from 'next/image';

const TechItem = ({ title, image, id }: TtechItem) => {
  return (
    <li
      className={`relative flex h-16 w-1/3 cursor-pointer items-center justify-around gap-x-2 rounded-xl bg-[#1B212B] bg-opacity-20 p-5 text-xs transition hover:bg-white hover:text-black  sm:w-1/4 md:w-1/5 md:justify-center md:gap-x-5 lg:text-lg ${classNames(
        {
          'hover:rotate-2': id % 2 === 0,
          'hover:-rotate-2': id % 2 !== 0,
        },
      )}`}>
      <div className="absolute h-full w-full"></div>
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
