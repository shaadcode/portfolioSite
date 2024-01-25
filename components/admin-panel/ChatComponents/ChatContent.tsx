// import { getMessages } from '@/actions/GetChatData';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { RecieveMessage, SendMessage } from '@/constants/ShortImport';
import GetData from '@/server/GetData';

import { TeveryPm, TpersonPms, TChatContentProps } from '@/constants/types';
const ChatContent = ({ selectedPerson, isStartFetch }: TChatContentProps) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      setData(await GetData('http://localhost:4000/messageDB'));
    };

    if (isStartFetch) FetchData();
  }, [isStartFetch]);

  return (
    <>
      {data &&
        data.map((personPm: TpersonPms, i) => (
          <div
            className={`${classNames({
              flex: personPm.id === selectedPerson,
              hidden: personPm.id !== selectedPerson,
            })} h-fit max-h-full w-full flex-col items-center overflow-auto px-2 py-5 text-xs`}
            key={i}>
            {personPm.messages.map((message: TeveryPm) =>
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
    </>
  );
};

export default ChatContent;
