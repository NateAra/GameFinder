import React from 'react'

interface ButtonProp {
    children: string;
    color: string;
    onClick: () => void;
}

const Button = ( { children, color = "Info", onClick}: ButtonProp) => {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>{children}</div>
  )
}

export default Button