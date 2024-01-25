import GetData from '@/server/GetData';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import NamePersonMessage from './NamePersonMessage';
import MessageContent from './MessageContent';
import { TusersData } from '@/constants/types';
import { updateUsersInDB } from '@/server/UpdateUsers';
import { APIs } from '@/services/API';
const UsersMessageBody = ({ isStartFetch }: { isStartFetch: boolean }) => {
  const [data, setData] = useState<TusersData[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<number>();
  const [deletePerson, setDeletePerson] = useState<number>();
  const chatContainer = useRef<HTMLDivElement | null>(null);

  const handleDeleteUser = async () => {
    try {
      deletePerson && (await updateUsersInDB(deletePerson));
      const updateUsers =
        data &&
        data.filter((user) => {
          return user.id !== deletePerson;
        });
      setData(updateUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chatContainer.current?.scrollTo(0, chatContainer.current?.scrollHeight);
  }, [selectedPerson, isStartFetch]);

  useEffect(() => {
    handleDeleteUser();
  }, [deletePerson]);

  useEffect(() => {
    const FetchData = async () => {
      setData(
        await GetData(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}${APIs.customAPIs.usersMessage}`,
        ),
      );
    };
    isStartFetch && FetchData();
  }, [isStartFetch]);

  return (
    <div className={`mb-14 flex w-full flex-col gap-5 lg:w-[550px]`}>
      <div className="flex flex-col items-stretch justify-center gap-5">
        <div className=" flex-ic-jb mb-4 w-full px-5">
          <div className={classNames({ hidden: !isStartFetch })}>
            <h1 className="font-bold">
              {!selectedPerson ? 'پیام ها' : 'مشخصات پیام'}
            </h1>
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
          <NamePersonMessage
            setSelectedPerson={setSelectedPerson}
            setDeletePerson={setDeletePerson}
            usersData={data}
          />
        </div>
      </div>
      <div
        ref={chatContainer}
        className={`${classNames({
          flex: selectedPerson,
          hidden: !selectedPerson,
        })} h-fit w-full items-center overflow-hidden rounded-2xl bg-white p-3`}>
        <MessageContent selectedPerson={selectedPerson} usersData={data} />
      </div>
    </div>
  );
};

export default UsersMessageBody;
