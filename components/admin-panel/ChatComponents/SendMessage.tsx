import { TeveryMessageInChat } from '@/constants/types';

const SendMessage = ({ message, sendTime }: TeveryMessageInChat) => {
  function handleCopy() {
    navigator.clipboard.writeText(message);
  }
  return (
    <div
      onClick={() => handleCopy()}
      className="relative my-2 ml-auto cursor-pointer rounded-lg bg-orange-500 p-2 text-white">
      {message}
      <span className="absolute left-[2px] top-8 text-[11px] font-semibold text-slate-800">
        {sendTime}
      </span>
    </div>
  );
};

export default SendMessage;
