import * as React from 'react'
import { cls } from '../../utils/utils'
import styles from './Button.module.scss'

export type ButtonStyle = 'green' | 'orange'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle: ButtonStyle
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): React.ReactElement<IButtonProps> => {
  const { btnStyle, children, className, ...rest } = props
  return (
    <button className={cls(styles.button, 'text--button', styles[`${btnStyle}`], className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
