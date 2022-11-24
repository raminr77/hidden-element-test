/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';

function Input({
  id,
  name,
  label,
  value,
  rows = 4,
  onChange,
  className,
  placeholder,
  type = 'text',
  inputClassName,
  labelClassName,
  required = false,
  isTextArea = false
}) {
  const inputClasses =
    'w-full leading-10 bg-transparent px-3 rounded outline-none border-2 border-gray focus:border-primary';

  const changeInput = (event) => onChange?.(event);

  return (
    <div className={classNames('w-full flex flex-col items-start mb-3', className)}>
      {label && (
        <label className={classNames('w-full text-base mb-2', labelClassName)}>
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={id}
          rows={rows}
          name={name}
          required={required}
          defaultValue={value}
          onChange={changeInput}
          placeholder={placeholder}
          className={classNames(inputClasses, inputClassName)}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={changeInput}
          placeholder={placeholder}
          className={classNames(inputClasses, inputClassName)}
        />
      )}
    </div>
  );
}

export { Input };
