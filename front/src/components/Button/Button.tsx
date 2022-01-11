import React from 'react'
import styles from './Button.module.scss'

type ButtonStyleTypes =
  | 'mainButtonStyle'
  | 'sidebarButtonStyle'
  | 'thirdButtonStyle'
  | 'fourthButtonStyle'
  | 'fifthButtonStyle'
  | 'userFieldButtonStyle'

interface IButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onSubmit?: () => void
  buttonStyle?: ButtonStyleTypes
  tooltipContent?: string
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  buttonStyle,
  onSubmit,
}) => (
  <>
    <button
      type="submit"
      className={buttonStyle && styles[buttonStyle]}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  </>
)

export default Button
