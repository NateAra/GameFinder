
interface ButtonProp {
    children: string;
    color?: string;
    handleClick: () => void;
}

export const Button = ( { children, handleClick, color = 'danger' }: ButtonProp) => {
  return (
    <button className={'btn btn-' + color} onClick={handleClick}>{children}</button>
  )
}
