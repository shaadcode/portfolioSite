'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../common/form/InputField';
import { toast } from 'react-toastify';
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

  const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  const adminTokenKey = process.env.NEXT_PUBLIC_ADMIN_TOKEN_KEY;

  const handleLogin = async (values: FormProps) => {
    if (values.username === adminUsername && values.password === adminPassword) {
      await new Promise((resolve) => setTimeout(resolve, 1));
      localStorage.setItem('accessKey', adminTokenKey || '');
      router.push('/shaadcodePanel');
    }
    toast.error('نام کاربری یا کلمه عبور اشتباه است!');
  };

  return (
    <div className="flexCenter fixed z-50 h-full w-full">
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

          <div className="flexCenter w-full overflow-hidden rounded-md">
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
