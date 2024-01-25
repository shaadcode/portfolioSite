import Person from './Person';
import { TnamePersonMessageProps, TusersData } from '@/constants/types';

const NamePersonMessage: React.FC<TnamePersonMessageProps> = ({
  setSelectedPerson,
  setDeletePerson,
  usersData,
}) => {
  return (
    <ul className="flexCenter flex-col gap-y-5">
      {usersData?.map((personData: TusersData) => (
        <Person
          key={personData.id}
          personData={personData}
          setSelectedPerson={setSelectedPerson}
          setDeletePerson={setDeletePerson}
        />
      ))}
    </ul>
  );
};

export default NamePersonMessage;
