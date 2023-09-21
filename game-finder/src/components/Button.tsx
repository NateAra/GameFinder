import React from 'react'

interface ButtonProp {
    children: string;
    onClick: () => void;
}

const Button = ( { children, onClick}: ButtonProp) => {
  return (
    <div className='btn btn-primary'>{children}</div>
  )
}

export default Button