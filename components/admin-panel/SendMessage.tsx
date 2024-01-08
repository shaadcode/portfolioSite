type TReacievMessage = {
  message: string;
  sendTime: string;
};

const SendMessage = ({ message, sendTime }: TReacievMessage) => {
  return (
    <div className="text-white p-2 my-2 relative rounded-lg ml-auto bg-orange-500">
      {message}
      <span className="left-[2px] text-slate-800 top-8 absolute font-semibold text-[11px]">
        {sendTime}
      </span>
    </div>
  );
};

export default SendMessage;
