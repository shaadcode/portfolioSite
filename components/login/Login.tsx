'use client';
import { useState } from 'react';

type TuserInfo = string[];
type TvalidateLogin = (valUsername: string, valPass: string) => void;

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('adminmoji');
  const [pass, setPass] = useState('123456');
  const userInformation: TuserInfo = [];

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    let i = 0;
    e.preventDefault();
    const allInputs = document.querySelectorAll('.loginInput');
    allInputs.forEach((element) => {
      userInformation[i] = element.value;
      i++;
    });
    validateLogin(userInformation[0], userInformation[1]);
  };

  const validateLogin: TvalidateLogin = (valUsername, valPass) => {
    valUsername === userName && valPass === pass
      ? setIsLogin(true)
      : document.querySelector('.errorMassage')?.classList.add('flex');
    document.querySelector('.errorMassage')?.classList.remove('hidden');
  };
  return (
    <div
      className={`bg-loginBg fixed z-50 ${
        isLogin ? 'hidden' : 'flex'
      } h-full w-full items-center justify-center`}>
      <div className="rounded-lg bg-white p-8">
        <div className="errorMassage text-loginBg mb-3 hidden w-full items-center justify-center text-sm  font-bold">
          <span>نام کاربری یا رمز عبور اشتباه است!</span>
        </div>
        <form className="flex flex-col items-center justify-center gap-7">
          <div>
            <input
              className="loginInput rounded-lg bg-[#2a313b] p-3 text-white outline-none"
              type="text"
              placeholder="Enter UserName..."
            />
          </div>
          <div>
            <input
              className="loginInput rounded-lg bg-[#2a313b] p-3 text-white outline-none"
              type="password"
              placeholder="Enter Pass..."
            />
          </div>
          <div className="flex w-full items-center justify-center overflow-hidden rounded-md">
            <button
              onClick={handleLogin}
              className="titleBtnLogIn w-full bg-slate-600 py-3 font-bold text-white"
              type="submit">
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
