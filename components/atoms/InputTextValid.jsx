'use client'

import { ErrorText } from '.'
import { Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { classNames as cx } from 'primereact/utils'
import { errorMessages } from '@utils'

const InputTextValid = ({
  handleForm,
  name,
  label,
  icon,
  disabled = false,
  pattern,
  className,
  required,
  validate,
}) => {
  const {
    formState: { errors },
    control,
  } = handleForm

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? errorMessages.mandatoryField : false,
        validate: (value) =>
          validate ? validate(value) || errorMessages.invalidValue : true,
        pattern: pattern && {
          value: pattern,
          message: errorMessages.invalidFormat,
        },
      }}
      render={({
        field: { value, name, ref, onBlur, onChange },
        fieldState: { error },
      }) => (
        <div className={`flex flex-col w-full ${className}`}>
          <span className={cx('p-float-label', { 'p-input-icon-left': icon })}>
            {icon && (
              <i
                className={cx(`pi pi-${icon}`, { 'text-brandError': error })}
              />
            )}
            <InputText
              id={name}
              value={value || ''}
              ref={ref}
              onBlur={(e) => {
                onBlur()
                onChange(e.target.value)
              }}
              onChange={(e) => onChange(e.target.value)}
              className={cx(
                'w-full bg-brandGrayBG p-1 border-2 ring-0 border-black',
                { 'p-invalid border-brandError': error },
                { 'pl-9': icon },
              )}
              disabled={disabled}
            />
            <label htmlFor={name} className={cx({ 'p-error': error })}>
              {label}
            </label>
          </span>
          <ErrorText name={name} errors={errors} />
        </div>
      )}
    />
  )
}

export default InputTextValid
