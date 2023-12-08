const ErrorText = ({ name, errors }) => {
  const fieldError = errors[name]
  return fieldError ? (
    <small className='p-error text-end'>{fieldError?.message + ''}</small>
  ) : (
    <small className='p-error'>&nbsp;</small>
  )
}

export default ErrorText
