import { TdeleteItemProps } from '@/constants/types';

const DeleteItem = ({ delFunc, id }: TdeleteItemProps) => {
  return (
    <button
      type="button"
      aria-label="Delete item"
      onClick={() => delFunc(id)}
      className="align-middle font-black text-forthColor">
      X
    </button>
  );
};

export default DeleteItem;
