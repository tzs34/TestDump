import React from 'react'
import Fade from '../Transitions/Fade'
const ItemRenderer = ({ name, deleteItem }) => {
  function handleOnClick(e) {
    if (deleteItem) {
      deleteItem(e.currentTarget.id)
    }
  }
  return (
    <Fade>
      <div className="renderer-box">
        <div className="row">
          <div>
            <div className="renderer-label">{name}</div>
          </div>
          <div>
            <button id={name} onClick={name => handleOnClick(name)} />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default ItemRenderer
