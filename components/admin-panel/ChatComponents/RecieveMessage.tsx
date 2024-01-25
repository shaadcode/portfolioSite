import { TeveryMessageInChat } from '@/constants/types';

const RecieveMessage = ({ message, sendTime }: TeveryMessageInChat) => {
  function handleCopy() {
    navigator.clipboard.writeText(message);
  }
  return (
    <div
      onClick={() => handleCopy()}
      className="relative my-2 mr-auto cursor-pointer rounded-lg bg-slate-800 p-2 text-white">
      {message}
      <span className="absolute right-[2px] top-8 text-[11px] font-semibold text-orange-500">
        {sendTime}
      </span>
    </div>
  );
};

export default RecieveMessage;
