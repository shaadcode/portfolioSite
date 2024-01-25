import { TportPostedProps } from '@/constants/types';
import DeleteItem from '../publicComponents/DeleteItem';

const PortPosted = (props: TportPostedProps) => {
  const { deletePortfolio, nameProject = '', time = '', uid = 0 } = props;

  return (
    <li className="defaultBtn flex-ic-jb w-full rounded-xl bg-secColor p-5 transition-colors hover:border-forthColor">
      <div className="flexCenter gap-3">
        <DeleteItem delFunc={deletePortfolio} id={uid} />
        <span>{nameProject}</span>
      </div>
      <span className="text-xs">{time}</span>
    </li>
  );
};

export default PortPosted;
