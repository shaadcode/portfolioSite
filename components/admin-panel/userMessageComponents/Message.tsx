'use client';
import { TeveryMessage } from '@/constants/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = ({ personName, message, sendTime, tell }: TeveryMessage) => {
  const notify = () => {
    toast.success('متن مورد نظر کپی شد!', {
      position: 'bottom-left',
    });
  };

  function handleCopy() {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.error('Copy to clipboard failed: ', error);
      });
  }
  return (
    <>
      <div className="flex-ic-jb h-fit w-full flex-col gap-5 rounded-lg bg-thirdColor p-5">
        <div>{sendTime}</div>
        <div className="flex-ic-jb w-full">
          <div>
            <h3 className="text-medium font-semibold">{personName}</h3>
          </div>
          <div>
            <span>tell : {tell}</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleCopy()}
        className="flexCenter h-fit w-full cursor-pointer select-none rounded-lg bg-thirdColor py-5">
        {message}
        <ToastContainer />
      </div>
    </>
  );
};

export default Message;
