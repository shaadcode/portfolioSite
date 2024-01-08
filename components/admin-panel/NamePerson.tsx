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

const NamePerson: React.FC<TnamePersonProps> = ({
  personData,
  setSelectedPerson,
}) => {
  return (
    <li
      onClick={() => setSelectedPerson(personData.id)}
      className="border-b-2 px-2 py-5 hover:bg-slate-100">
      {personData.name}
    </li>
  );
};

export default NamePerson;
