import { TselectedTechnoProps } from '@/constants/types';
import DeleteItem from '../publicComponents/DeleteItem';

const SelectedTechno = ({ deleteTech, tech }: TselectedTechnoProps) => {
  return (
    <li className="flexCenter gap-2 rounded-md  bg-thirdColor p-2 font-bold">
      {tech.name}
      <DeleteItem delFunc={deleteTech} id={tech.id} />
    </li>
  );
};

export default SelectedTechno;
