import { useFetch } from '@/hooks/useFetch';
import { useEffect, useRef, useState } from 'react';
import PersonChat from './PersonChat';
import RecieveMessage from './RecieveMessage';
import SendMessage from './SendMessage';

type Tmessage = {
  id: number;
  uuid: string;
  messageType: string;
  message: string;
  sendTime: string;
};

const ChatInDash = () => {
  const [databaseUrl, setDatabaseUrl] = useState('/api/masseges');
  const { data, isLoading, error } = useFetch(databaseUrl);
  const [selectedPerson, setSelectedPerson] = useState<number>();
  const chatContainer = useRef<HTMLDivElement | undefined>();

  useEffect(() => {
    chatContainer.current?.scrollTo(0, chatContainer.current.scrollHeight);
  }, [selectedPerson]);

  return (
    <div className={`${!selectedPerson ? 'w-96' : 'w-[550px]'} flex flex-col gap-5`}>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className=" flex w-full items-center justify-between px-5">
          <div>
            <h1 className="font-bold">{!selectedPerson ? 'پیام ها' : 'صفحه چت'}</h1>
          </div>
          <div
            onClick={() => setSelectedPerson(undefined)}
            className={`${
              !selectedPerson ? 'hidden' : 'flex'
            } cursor-pointer items-center justify-center rounded-full p-2 px-3 hover:bg-white hover:text-black`}>
            <button>&#11208;</button>
          </div>
        </div>
        <div className={`h-fit w-96 ${selectedPerson ? 'hidden' : ''}`}>
          {isLoading && isLoading}
          {error && error}
          <ul className="flex flex-col items-center justify-center gap-y-5">
            {data &&
              data.map((personData, i) => (
                <PersonChat
                  key={i}
                  personData={personData}
                  setSelectedPerson={setSelectedPerson}
                />
              ))}
          </ul>
        </div>
      </div>
      <div
        ref={chatContainer}
        className={`${
          selectedPerson ? 'flex' : 'hidden'
        } h-[500px] w-full items-end overflow-hidden rounded-2xl bg-white`}>
        {data &&
          data.map((namePerson: { id: number; messages: Tmessage[] }, i) => (
            <div
              className={`${
                namePerson.id === selectedPerson ? 'flex' : 'hidden'
              } h-fit max-h-full w-full flex-col items-center overflow-auto px-2 py-5 text-xs`}
              key={i}>
              {namePerson.messages.map((message: Tmessage) =>
                message.messageType === 'recieve' ? (
                  <RecieveMessage
                    key={message.id}
                    message={message.message}
                    sendTime={message.sendTime}
                  />
                ) : (
                  <SendMessage
                    key={message.id}
                    message={message.message}
                    sendTime={message.sendTime}
                  />
                ),
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatInDash;
