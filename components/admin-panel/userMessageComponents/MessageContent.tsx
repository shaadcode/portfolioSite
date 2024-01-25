import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Message from './Message';
import { TMessageContentProps, TusersData } from '@/constants/types';

const MessageContent = ({ selectedPerson, usersData }: TMessageContentProps) => {
  let data: TusersData[] = usersData || [];

  return (
    <>
      {data &&
        data.map((person: TusersData, i) => (
          <div
            className={`${classNames({
              flex: person.id === selectedPerson,
              hidden: person.id !== selectedPerson,
            })} h-fit max-h-full w-full flex-col items-center gap-5 overflow-auto rounded-lg px-2 py-3 text-xs`}
            key={i}>
            {person.id === selectedPerson && (
              <Message
                personName={person.userName}
                message={person.userText}
                sendTime={person.time}
                tell={person.userTell}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default MessageContent;
