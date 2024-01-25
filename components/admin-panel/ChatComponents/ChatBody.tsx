'use client';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import ChatContent from './ChatContent';
import NamePerson from './NamePerson';

const ChatBody = ({ isStartFetch }: { isStartFetch: boolean }) => {
  const [selectedPerson, setSelectedPerson] = useState<number>();
  const chatContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatContainer.current?.scrollTo(0, chatContainer.current.scrollHeight);
  }, [selectedPerson, isStartFetch]);

  return (
    <div className={`mb-14 flex w-full flex-col gap-5 lg:w-[550px]`}>
      <div className="flex flex-col items-stretch justify-center gap-5">
        <div className=" flex-ic-jb mb-4 w-full px-5">
          <div className={classNames({ hidden: !isStartFetch })}>
            <h1 className="font-bold">{!selectedPerson ? 'پیام ها' : 'صفحه چت'}</h1>
          </div>
          <div
            onClick={() => setSelectedPerson(undefined)}
            className={`${classNames({
              hidden: !selectedPerson,
              flex: selectedPerson,
            })} ic-jc cursor-pointer rounded-full p-1 px-3 transition-colors hover:bg-white hover:text-black`}>
            <button>&#11208;</button>
          </div>
        </div>
        <div
          className={`h-fit w-full
         ${classNames({ hidden: selectedPerson })}`}>
          <NamePerson
            setSelectedPerson={setSelectedPerson}
            isStartFetch={isStartFetch}
          />
        </div>
      </div>
      <div
        ref={chatContainer}
        className={`${classNames({
          flex: selectedPerson,
          hidden: !selectedPerson,
        })} h-[500px] w-full items-end overflow-hidden rounded-2xl bg-white`}>
        <ChatContent selectedPerson={selectedPerson} isStartFetch={isStartFetch} />
      </div>
    </div>
  );
};

export default ChatBody;
