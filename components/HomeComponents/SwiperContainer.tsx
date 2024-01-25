import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';

import { questions } from '@/constants/constants';

const SwiperContainer = ({
  handleQuestion,
}: {
  handleQuestion: (question: string, id: number) => void;
}) => {
  return (
    <>
    <div className="flexCenter mt-8 flex-col text-xl font-black text-white md:mt-12">
          <h2>سوالات متداول</h2>
        </div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 5000 }}
      slidesPerView={2}
      spaceBetween={50}
      loop={true}
      className="text-white">
      {questions.map(({ question, id }) => (
        <SwiperSlide
          key={id}
          className="my-auto cursor-pointer select-none text-center text-xs font-light hover:text-[#ffc000] md:text-sm"
          onClick={() => {
            handleQuestion(question, id);
          }}>
          {question}
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default SwiperContainer;
