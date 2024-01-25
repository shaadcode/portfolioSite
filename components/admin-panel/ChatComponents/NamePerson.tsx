import { useEffect, useState } from 'react';

import PersonChat from './PersonChat';
import GetData from '@/server/GetData';
import { TnamePersonPropsChat } from '@/constants/types';

const NamePerson: React.FC<TnamePersonPropsChat> = ({
  setSelectedPerson,
  isStartFetch,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      setData(await GetData('http://localhost:4000/messageDB'));
    };
    if (isStartFetch) FetchData();
  }, [isStartFetch]);

  return (
    <ul className="flexCenter flex-col gap-y-5">
      {data &&
        data.map((personData, i) => (
          <PersonChat
            key={i}
            personData={personData}
            setSelectedPerson={setSelectedPerson}
          />
        ))}
    </ul>
  );
};

export default NamePerson;
