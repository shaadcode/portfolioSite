import classNames from 'classnames';
import Image from 'next/image';
import Typewriter from './Typewriter';
import profileImage from '@/public/profileChat.jpg';

export type TchatbotDisplay = {
  selectQuestion: string | undefined;
  answer: string | undefined;
};

const ChatbotDisplay = ({ selectQuestion, answer }: TchatbotDisplay) => {
  return (
    <div className="h-[400px] w-[350px] rounded-3xl bg-[#222A35] p-2 md:w-[600px] lg:w-[800px]">
      <div className="relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-2xl bg-white p-2 text-sm leading-7 md:p-5">
        <div
          className={`${classNames({
            hidden: selectQuestion,
            flex: !selectQuestion,
          })} ic-jc absolute h-full w-full`}>
          <span className="animate-bounce pl-4 text-lg font-black text-[#222A35] md:text-3xl">
            از بخش زیر یک سوال را انتخاب کنید!
          </span>
        </div>
        <div
          className={`${classNames({
            'translate-x-0': selectQuestion,
            'translate-x-96': !selectQuestion,
          })} ml-4 mt-auto w-fit  max-w-96 rounded-lg bg-[#ffc000] p-3 text-justify text-xs transition-all md:ml-0 md:text-sm`}>
          <span>{selectQuestion}</span>
        </div>
        <div
          className={`${classNames({
            'translate-x-0': answer,
            '-translate-x-[600px]': !answer,
          })} mr-auto flex w-fit flex-row-reverse py-3 pl-0 text-justify text-xs leading-5 transition-all md:text-sm`}>
          <div className="mr-1 md:mr-3">
            <Image
              src={profileImage}
              alt="profile"
              width={80}
              height={80}
              className="w-10 rounded-full md:w-14"
            />
          </div>
          <div className="w-fit max-w-[400px] rounded-lg bg-[#222A35] p-3 text-white md:w-[500px]">
            <Typewriter userAnswer={answer ?? ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDisplay;
