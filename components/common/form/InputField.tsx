import { useField } from 'formik';
import { FunctionComponent } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField: FunctionComponent<Props> = ({ ...props }) => {
  const [field, meta] = useField(props.name || 'input');
  return (
    <div
      className={`flex flex-col gap-1 ${
        meta.touched && meta.error ? 'invalid-input-field' : ''
      }`}>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error ms-1 text-xs text-red-500">{meta.error}</span>
      ) : null}
    </div>
  );
};
