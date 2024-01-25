'use client';
// import { workSamples } from '@/constants/constants';
import { TworkSample } from '@/constants/types';
import GetData from '@/server/GetData';

import { Pagination } from '@nextui-org/react';

import { useEffect, useState } from 'react';
import CardContainer from './CardContainer';

const Portfolio = () => {
  const itemsPerPage = 2;
  const [currentItems, setCurrentItems] = useState([]);
  const [workSamples, setWorkSamples] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(workSamples.length / itemsPerPage),
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData('http://localhost:4000/portfolios');
      setWorkSamples(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setTotalPages(Math.ceil(workSamples.length / itemsPerPage));
    setCurrentItems(workSamples.slice(startIndex, endIndex));
  }, [workSamples]);

  function handleChangePage(page: number = 1) {
    setCurrentPage(page);
  }

  return (
    <section
      id="portfolio"
      className="TextsAbility flexCenter my-32 select-none snap-start flex-col px-5 md:px-10">
      <header className="abilityHeader">
        <h2 className="text-center text-[30px] font-black text-white md:text-[40px]">
          ویژگی
          <span className="text-[#ffc000]"> سایت </span>
          های طراحی شده...
        </h2>
      </header>
      <div className="flexCenter mt-10 max-w-[1140px] flex-col gap-4 md:gap-10">
        <div className="flexCenter w-full flex-col gap-4 md:gap-10 lg:flex-row">
          {currentItems.length > 0 ? (
            currentItems.map(
              ({
                id,
                nameProject,
                typeProject,
                useTechsProject,
                link,
                time,
              }: TworkSample) => (
                <CardContainer
                  key={id}
                  id={id}
                  nameProject={nameProject}
                  typeProject={typeProject}
                  useTechsProject={useTechsProject}
                  link={link}
                  time={time}
                />
              ),
            )
          ) : (
            <span className="text-white">
              فعلا نمونه کاری برای نمایش وجود ندارد!
            </span>
          )}
        </div>
        <div>
          <Pagination
            onChange={handleChangePage}
            showShadow
            color="warning"
            total={totalPages}
            initialPage={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
