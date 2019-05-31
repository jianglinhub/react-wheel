import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './dialog'

export default function() {
  const [x, setX] = useState(false)
  // const openModal = () => {}

  return (
    <div>
      <div>
        <h1>example1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => setX(false)}>ok</button>,
            <button onClick={() => setX(false)}>cancel</button>
          ]
        } onClose={() => setX(false)} closeOnClickMask={true}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button
          onClick={() => confirm('1', () => {console.log('yes')},
            () =>{console.log('no')})}>confirm</button>
      </div>
      <div>
        <h1>example3</h1>
        <button onClick={() => modal(<h1>modal</h1>)}>modal</button>
      </div>
    </div>
  )
}