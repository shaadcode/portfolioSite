type TReacievMessage = {
  message: string;
  sendTime: string;
};

const RecieveMessage = ({ message, sendTime }: TReacievMessage) => {
  return (
    <div className="text-white p-2 my-2 relative rounded-lg mr-auto bg-slate-800">
      {message}
      <span className="right-[2px] text-orange-500 top-8 absolute font-semibold text-[11px]">
        {sendTime}
      </span>
    </div>
  );
};

export default RecieveMessage;
