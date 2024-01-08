type TnamePerson = {
  name: string;
  id: number;
  massages: {
    id: number;
    uuid: string;
    massageType: string;
    massage: string;
    sendTime: string;
  }[];
};

type TnamePersonProps = {
  personData: TnamePerson;
  setSelectedPerson: React.Dispatch<number | undefined>;
};

const PersonChat: React.FC<TnamePersonProps> = ({
  personData,
  setSelectedPerson,
}) => {
  return (
    <li
      onClick={() => setSelectedPerson(personData.id)}
      className="flex w-full cursor-pointer items-center justify-between rounded-xl border-2 border-thirdColor bg-secColor px-3 py-5 transition-colors hover:border-forthColor">
      <span>{personData.name}</span>
      <span>12:00</span>
    </li>
  );
};

export default PersonChat;
