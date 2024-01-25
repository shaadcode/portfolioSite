import { TpersonProps } from '@/constants/types';
import DeleteItem from '../publicComponents/DeleteItem';

const Person: React.FC<TpersonProps> = ({
  personData: { id, userName, time },
  setSelectedPerson,
  setDeletePerson,
}) => {
  return (
    <li className="defaultBtn flex-ic-jb w-full gap-4 rounded-xl bg-secColor px-3 transition-colors hover:border-forthColor">
      <DeleteItem delFunc={setDeletePerson} id={id} />
      <div
        onClick={() => setSelectedPerson(id)}
        className=" flex-ic-jb h-full w-full gap-4 py-5 ">
        <span>{userName}</span>
        <span>{time}</span>
      </div>
    </li>
  );
};

export default Person;
