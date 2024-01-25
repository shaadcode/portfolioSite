import { TcustBtnV1 } from '@/constants/types';

const CustBtnV1 = ({ setCommand, commandVal, tagContent }: TcustBtnV1) => {
  return (
    <button
      type="button"
      onClick={() => setCommand(commandVal)}
      className="defaultBtn rounded-xl bg-secColor px-5 py-4 transition-colors hover:border-slate-500">
      {tagContent}
    </button>
  );
};

export default CustBtnV1;
