import { TformData } from '@/constants/types';
import GetData from '@/server/GetData';
import { updatePortsInDB } from '@/server/UpdatePorts';
import { useEffect, useState } from 'react';
import PortPosted from './PortPosted';
import { APIs } from '@/services/API';
import axios from 'axios';

const LastPortfolios = () => {
  const [data, setData] = useState<TformData[]>();

  useEffect(() => {
    const fetchData = async () => {
      setData(
        await GetData(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}${APIs.customAPIs.Portfolios}`,
        ),
      );
    };
    fetchData();
  }, []);

  function deletePortfolio(id: number) {
    const updatedData = data?.filter((port) => port.uid !== id);

    setData(updatedData);

    // Assuming your updatePortsInDB function takes care of deleting from the database
    console.log(id);
    updatePortsInDB(id);
  }

  return (
    <div className="h-fit w-full">
      <ul className="flexCenter flex-col gap-4">
        {data &&
          data.map((port) => (
            <PortPosted
              key={port.id}
              deletePortfolio={deletePortfolio}
              nameProject={port.nameProject}
              time={port.time}
              uid={port.uid}
            />
          ))}
      </ul>
    </div>
  );
};

export default LastPortfolios;
