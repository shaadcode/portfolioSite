import { TtechnoOptSelectListProps } from '@/constants/types';

const TechnoOptSelectList = ({ title = '' }: TtechnoOptSelectListProps) => {
  return (
    <option className="p-3 text-thirdColor" value={title}>
      {title}
    </option>
  );
};

export default TechnoOptSelectList;
