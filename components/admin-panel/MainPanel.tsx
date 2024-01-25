'use client';
import { useState } from 'react';
import PortfolioContainer from './PortfolioComponents/PortfolioContainer';
import UserMessageContainer from './userMessageComponents/UserMessageContainer';
import CustBtnV1 from './publicComponents/CustBtnV1';

const MainPanel = () => {
  const [isStartFetch, setIStartFetch] = useState(false);
  const [command, setCommand] = useState('');
  const putConditionClass = (changeCommand: string, key: string) => {
    return changeCommand === key ? 'flex' : 'hidden';
  };

  return (
    <div className="flexCenter h-fit w-full flex-col gap-10">
      <div className="flexCenter w-full gap-28">
        <CustBtnV1
          setCommand={setCommand}
          commandVal={'portfolio'}
          tagContent={'بخش نمونه کار'}
        />

        <CustBtnV1
          setCommand={setCommand}
          commandVal={'userMessages'}
          tagContent={'بخش پیام ها'}
        />
      </div>
      <div className="flexCenter h-fit w-full">
        <PortfolioContainer display={putConditionClass(command, 'portfolio')} />
        <div
          className={`${putConditionClass(
            command,
            'userMessages',
          )} ic-jc h-full w-full flex-col`}>
          <UserMessageContainer
            setIStartFetch={setIStartFetch}
            isStartFetch={isStartFetch}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
