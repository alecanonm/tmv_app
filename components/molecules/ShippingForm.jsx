'use client'

import { InputTextValid } from '@components/atoms'

const ShippingForm = ({ handleForm }) => {
  return (
    <form
      id={`form_shipping_data`}
      autoComplete='off'
      className='text-center justify-center items-center flex gap-1 flex-wrap'
    >
      <InputTextValid
        handleForm={handleForm}
        name='first_name'
        icon='user'
        label='Nombre'
        required
      />
      <InputTextValid
        handleForm={handleForm}
        name='last_name'
        icon='user'
        label='Apellido'
        required
      />
      <InputTextValid
        handleForm={handleForm}
        name='address'
        icon='home'
        label='Dirección'
        required
      />
      <InputTextValid
        handleForm={handleForm}
        name='phone_number'
        icon='phone'
        label='Teléfono'
        pattern={/^[0-9]+$/}
        required
      />
      <InputTextValid
        handleForm={handleForm}
        name='postal_code'
        icon='map-marker'
        label='Código postal'
        required
      />
    </form>
  )
}

export default ShippingForm
