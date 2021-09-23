import * as React from 'react'
import { cls } from '../../utils/utils'
import styles from './Button.module.scss'

export type ButtonStyle = 'lightOrange' | 'lightGreen' | 'green' | 'orange' | 'red' | 'orangeDark'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle: ButtonStyle
  isClear?: boolean
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): React.ReactElement<IButtonProps> => {
  const { btnStyle, children, className, isClear, type, form, ...rest } = props
  return (
    <button
      type={type}
      form={form}
      className={cls(styles.button, 'text--button', styles[`${btnStyle}${isClear ? 'Clear' : ''}`], className)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
