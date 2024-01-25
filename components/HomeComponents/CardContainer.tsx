import { TCardContainerProps } from '@/constants/types';
import { Button, Card, CardFooter, Image } from '@nextui-org/react';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

const CardContainer = ({
  id,
  nameProject,
  typeProject,
  useTechsProject,
  link,
  time,
}: TCardContainerProps) => {
  const [toggleDetail, setToggleDetail] = useState<{ [key: number]: boolean }>({});

  return (
    <Card
      isFooterBlurred
      radius="lg"
      key={id}
      className="flex cursor-pointer items-center  bg-mainBg md:h-80">
      <Image
        alt="portfolio"
        className="h-60 object-cover md:h-80"
        height={1000}
        width={500}
        src="bgHero.png"
      />

      <CardFooter className="absolute bottom-1 z-10 flex w-[calc(100%_-_8px)] flex-col overflow-hidden rounded-large border-1 border-white/20 py-2 pr-5 shadow-small transition before:rounded-xl before:bg-white/5 hover:items-start">
        <div className=" flex-ic-jb w-full">
          <h3 className="text-sm font-bold text-white/80">{nameProject}</h3>
          <Button
            size="sm"
            radius="lg"
            className="detailbutton bg-black/20 font-semibold text-white"
            onClick={() =>
              setToggleDetail((prev) => ({
                ...prev,
                [id]: !prev[id],
              }))
            }>
            جزییات
          </Button>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL_API}/workSamples/${link}`}>
            <Button
              className="bg-black/20 text-tiny text-white"
              variant="flat"
              color="default"
              radius="lg"
              size="sm">
              مشاهده
            </Button>
          </Link>
        </div>
        <div
          className={`${classNames({
            flex: toggleDetail[id],
            hidden: !toggleDetail[id],
          })} my-3 w-full`}>
          <ul className="techList flexCenter w-full flex-wrap gap-3 text-white">
            {useTechsProject &&
              useTechsProject.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md p-3 py-2 text-sm tracking-wider shadow-md transition hover:bg-secColor">
                  {tech}
                </li>
              ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardContainer;
