import * as React from 'react'
import classes from '../helpers/classes'
import './input.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  
}

const Input: React.FC<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <input
      className={classes('fui-input', className)}
      {...rest}
    />
  )
}

export default Input