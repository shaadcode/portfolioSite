import classNames from 'classnames';
import { useField } from 'formik';
import { FunctionComponent } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField: FunctionComponent<Props> = ({ ...props }) => {
  const [field, meta] = useField(props.name || 'input');
  return (
    <div
      className={`flex flex-col gap-1 ${classNames({
        'invalid-input-field': meta.touched && meta.error,
      })}`}>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error ms-1 text-xs text-red-500">{meta.error}</span>
      ) : null}
    </div>
  );
};
