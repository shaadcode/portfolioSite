import SetUserMessage from '@/server/SetUserMessage';
import { useEffect, useRef, useState } from 'react';

const DedicatedQuestion = () => {
  const [userNameInputContent, setUserNameInputContent] = useState('');
  const [userTelContent, setUserTelContent] = useState('');
  const [textAreaContent, setTextAreaContent] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const buttonVal = useRef<HTMLButtonElement | null>(null);

  const conditionInputs = (type: 'AND' | 'OR') =>
    type === 'AND'
      ? !!userNameInputContent && !!textAreaContent && !!userTelContent
      : !!userNameInputContent || !!textAreaContent || !!userTelContent;

  useEffect(() => {
    setIsDisabled(conditionInputs('AND'));
    console.log('oops!');
    conditionInputs('OR') &&
      buttonVal.current &&
      (buttonVal.current.innerText = 'ارسال');
  }, [textAreaContent, userNameInputContent, userTelContent]);

  function cleanText() {
    if (buttonVal.current) buttonVal.current.innerText = 'در حال ارسال...';
    setTimeout(() => {
      setUserNameInputContent('');
      setTextAreaContent('');
      setUserTelContent('');
      if (buttonVal.current) buttonVal.current.innerText = 'ارسال شد!';
    }, 5000);
  }

  return (
    <div>
      <form
        action={SetUserMessage}
        className="flexCenter w-fit flex-col gap-4 text-sm font-semibold text-thirdColor">
        <h4 className="flexCenter select-none flex-col text-lg text-white">
          اگر سوال خاصی دارید در بخش زیر وارد کنید!
        </h4>
        <input
          name="userName"
          value={userNameInputContent}
          onChange={(e) => setUserNameInputContent(e.target.value)}
          placeholder="نام و نام خانوادگی"
          className="mt-5 w-full resize-none rounded-lg p-5 text-justify outline-none"
        />
        <input
          name="userTell"
          minLength={9}
          maxLength={12}
          value={userTelContent}
          onChange={(e) => setUserTelContent(e.target.value)}
          placeholder="شماره تلفن"
          className="mt-5 w-full resize-none rounded-lg p-5 text-justify outline-none"
        />

        <textarea
          name="userMessage"
          value={textAreaContent}
          rows={7}
          cols={45}
          onChange={(e) => setTextAreaContent(e.target.value)}
          placeholder="سوالتان را وارد کنید..."
          className="mt-5 resize-none rounded-lg p-5 text-justify text-thirdColor	outline-none "
        />

        <button
          disabled={!isDisabled}
          onClick={() => cleanText()}
          type="submit"
          ref={buttonVal}
          className="rounded-md bg-thirdColor px-4 py-3 text-sm font-bold text-white">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default DedicatedQuestion;
