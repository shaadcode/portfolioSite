'use client';
import { useState } from 'react';
import { v4 as randomId } from 'uuid';
import NamePerson from './NamePerson';
import RecieveMessage from './RecieveMessage';
import SendMessage from './SendMessage';
import { useFetch } from '@/hooks/useFetch';
import { useCalcRecieveMessage } from '@/hooks/useCalcRecievemessage';

type Tmessage = {
  id: number;
  uuid: string;
  messageType: string;
  message: string;
  sendTime: string;
};

const Chat = () => {
  const [selectedPerson, setSelectedPerson] = useState<number>();
  const [inputVal, setInputVal] = useState('');
  const [databaseUrl, setDatabaseUrl] = useState('/api/messages');
  const time = new Date();
  const { data, isLoading, error } = useFetch(databaseUrl);
  const { prevAllRecieveMessage, lastAllRecieveMessage } = useCalcRecieveMessage({
    data,
    error,
  });

  function sendMassage() {
    const personDatas =
      data &&
      data.find((person: { id: number }) => {
        return person.id === selectedPerson;
      });

    const allMassageLength = personDatas?.messages.length;

    const newSendMassage = {
      id: allMassageLength,
      uuid: randomId(),
      massageType: 'send',
      massage: inputVal,
      sendTime: `${time.getHours()}:${time.getMinutes()}`,
    };
    console.log(newSendMassage);
  }

  return (
    <div className="min-w-screen fontchat flex min-h-screen items-center justify-center gap-5 bg-slate-800 p-3">
      <div className="h-[850px] w-1/4 rounded-xl bg-white p-3">
        {isLoading && isLoading}
        {error && error}
        <ul>
          {data &&
            data.map((namePerson, i) => (
              <NamePerson
                key={i}
                personData={namePerson}
                setSelectedPerson={setSelectedPerson}
              />
            ))}
        </ul>
      </div>
      <div className="flex h-[850px] w-3/4 flex-col justify-end gap-3 rounded-xl bg-white p-3">
        <div
          className={`${
            !selectedPerson && 'hidden'
          } w-full rounded-lg bg-white text-white`}>
          <span className="flex w-full rounded-lg bg-slate-600 p-2">
            {data &&
              data.map(
                (person: { id: number; name: string }) =>
                  person.id === selectedPerson && person.name,
              )}
          </span>
        </div>
        <div className="flex h-full w-full items-end justify-end overflow-hidden rounded-xl">
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
        <div
          className={`${
            selectedPerson ? 'flex' : 'hidden'
          } w-full flex-row-reverse items-center justify-center gap-2`}>
          <div className="w-full">
            <input
              type="text"
              onChange={(e) => setInputVal(e.target.value)}
              onKeyUp={(e) => e.code === 'Enter' && setInputVal(e.target.value)}
              className="sendInput w-full rounded-xl bg-slate-300 p-3 text-xs font-medium outline-none"
            />
          </div>
          <div className="h-full">
            <button
              disabled={!inputVal}
              onClick={() => sendMassage()}
              className="h-full rounded-full bg-orange-500 px-5 py-2 font-black">
              ↨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
