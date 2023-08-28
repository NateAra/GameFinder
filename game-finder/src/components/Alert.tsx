import React, { ReactNode } from 'react'

interface AlertProps {
    children: ReactNode;
}

export const Alert = ({ children } : AlertProps) => {
  return (
    <div className='alert alert-primery' >
        {children}
    </div>
  )
}
