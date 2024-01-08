'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../common/form/InputField';
import { toast } from 'react-toastify';
import { getAuthToken, setAuthToken } from '@/utils/authService';
import { useRouter } from 'next/navigation';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('مقدار نادرست'),
  password: Yup.string().required('مقدار نادرست'),
});

interface FormProps {
  username?: string;
  password?: string;
}

const Login = () => {
  const router = useRouter();
  const handleLogin = (values: FormProps) => {
    if (
      values.username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setAuthToken();
      router.push('/shaadcodePanel');
      return;
    }

    toast.error('نام کاربری یا کلمه عبور نادرست است');
  };

  return (
    <div className={`fixed z-50 flex h-full w-full items-center justify-center`}>
      <Formik
        validationSchema={LoginSchema}
        initialValues={
          {
            username: '',
            password: '',
          } as FormProps
        }
        onSubmit={handleLogin}>
        <Form className="flex flex-col gap-8 rounded-lg bg-white p-8">
          <p className="text-2xl font-bold">ورود</p>

          <InputField id="username" name="username" placeholder="نام کاربری" />

          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="کلمه‌عبور"
          />

          <div className="flex w-full items-center justify-center overflow-hidden rounded-md">
            <button
              className="titleBtnLogIn w-full bg-slate-600 py-3 font-bold text-white"
              type="submit">
              ورود
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
