'use client'

import { Toast } from 'primereact/toast'
import { useRef } from 'react'

const withToast = (WrappedComponent) => {
  const ComponentWithToast = (props) => {
    const toast = useRef(null)

    const showInfo = (summary, detail) => {
      toast.current.show({
        severity: 'info',
        summary,
        detail,
      })
    }

    const showSuccess = (summary, detail) => {
      toast.current.show({
        severity: 'success',
        summary,
        detail,
      })
    }

    const showWarning = (summary, detail) => {
      toast.current.show({
        severity: 'warn',
        summary,
        detail,
      })
    }

    const showError = (summary, detail) => {
      toast.current.show({
        severity: 'error',
        summary,
        detail,
      })
    }

    return (
      <>
        <Toast ref={toast} className='w-[90vw] sm:w-auto' />
        <WrappedComponent
          {...props}
          showSuccess={showSuccess}
          showError={showError}
          showWarning={showWarning}
          showInfo={showInfo}
        />
      </>
    )
  }

  return ComponentWithToast
}

export default withToast
