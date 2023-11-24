'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client'
import { Cover } from '@components/molecules'
import { GET_PRODUCTS } from '@utils'
import { useEffect } from 'react'

const Covers = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  useEffect(() => {
    console.log({ data, loading, error })
  }, [data])

  return (
    <>
      {data?.brands?.map((cover) => {
        //ESTOY TRATANDO DE HACER QUE LAS IMAGENES SE MUESTRE Y EL COLOR DE FONDO SE CAMBIE SEGUN EL COLOR DE LA IMAGEN HEXADECIMAL, SI LO HAGO QUEMADO FUNCIONA PERO CUANDO LO HAGO CON LOS DATOS DE LA API NO FUNCIONA, ESTOY TRATANDO DE QUITARLE EL NUMERAL PARA PONERSELO QUEMADO Y VER SI FUNCIONA, PERO NO FUNCIONA, NO SE QUE ESTOY HACIENDO MAL, AYUDA POR FAVOR

        // const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL}assets/${cover.image?.id}`
        const color = cover.color?.slice(1)
        console.log(color)
        return (
          <Cover
            key={cover.id}
            title={cover.name}
            img={
              'https://directus-production-1790.up.railway.app/assets/f35da664-ef98-4cf8-bd72-882a5ca68bb5'
            }
            width={600}
            height={600}
            bgColor={`bg-[#${color}]`}
          />
        )
      })}
    </>
  )
}

export default Covers
