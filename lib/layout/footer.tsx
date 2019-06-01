import React from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './layout.scss'

const sc = scopedClassMaker('gu-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props

  return (
    <div className={sc('footer', { extra: className })} {...rest}>
      footer
    </div>
  )
}

export default Footer