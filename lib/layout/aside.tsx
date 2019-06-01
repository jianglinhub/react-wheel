import React from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './layout.scss'

const sc = scopedClassMaker('gu-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props

  return (
    <div className={sc('aside', { extra: className })} {...rest}>
      Aside
    </div>
  )
}

export default Aside