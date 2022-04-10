import React from 'react'
import './button.css'

const Styles = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--white--outline",
  "btn--theme--solid",
 
];

const Size = [
  "btn--medium",
  "btn--large",
]

const Sizes = [ "btn--medium", "btn--large"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {

  const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]; 

  const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0];

  return <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  onClick={onClick} type={type} >
    {children}
  </button>
}

export default Button
