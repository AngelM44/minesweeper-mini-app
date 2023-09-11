import React from 'react';
import updateFlag from './Board'

export default function Cell ({details}){
  return (
    <div
    onContextMenu={() => updateFlag()}
    style={style.cellStyle}
    onClick={() => console.log(details)}
    >
      {details.value}
    </div>
  )
}

const style = {
  cellStyle: {
    width: 40, height: 40, background: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}