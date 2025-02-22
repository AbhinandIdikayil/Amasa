import './Button.css'
enum buttonEnum {
  submit = 'submit',
  button = 'button'
}
interface ButtonProps {
  className: string
  type: keyof typeof buttonEnum
  content: string
}
function Button({ type, className, content }: ButtonProps) {
  return (
    <button className={`button-13 ${className} text-[#0f1111] text-[13px] bg-[#fff] border border-[#d5d9d9] rounded-[8px] w-[100px]`} role={type}> {content} </button>
  )
}

export default Button