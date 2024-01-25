import classNames from 'classnames';
import ChatBody from '../ChatComponents/ChatBody';
import UsersMessageBody from './UsersMessageBody';
import { Dispatch, SetStateAction } from 'react';

const UserMessageContainer = ({
  isStartFetch,
  setIStartFetch,
}: {
  isStartFetch: boolean;
  setIStartFetch: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className={isStartFetch ? 'hidden' : ''}>
        <button onClick={() => setIStartFetch(true)}>دریافت آخرین پیام ها</button>
      </div>
      <ChatBody isStartFetch={isStartFetch} />
      <UsersMessageBody isStartFetch={isStartFetch} />
    </>
  );
};

export default UserMessageContainer;
