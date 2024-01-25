import Loading from '@/app/shaadcodePanel/loading';
import { TnamePersonProps } from '@/constants/types';
import { Suspense } from 'react';

const PersonChat: React.FC<TnamePersonProps> = ({
  personData,
  setSelectedPerson,
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <li
        onClick={() => setSelectedPerson(personData.id)}
        className="defaultBtn flex-ic-jb w-full rounded-xl bg-secColor px-3 py-5 transition-colors hover:border-forthColor">
        <span>{personData.name}</span>
        <span>12:00</span>
      </li>
    </Suspense>
  );
};

export default PersonChat;
