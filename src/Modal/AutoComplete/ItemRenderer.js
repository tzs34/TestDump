import React from 'react'

import style from  '../styles.module.css'

const ItemRenderer = ({ name, deleteItem }) => {
  function handleOnClick(e) {
    if (deleteItem) {
      deleteItem(e.currentTarget.id)
    }
  }
  return (
    <div className={style.fadein}>
      <div className={style.rendererbox}>
        <div className={style.row}>
          <div>
            <div className={style.rendererlabel}>{name}</div>
          </div>
          <div>
            <button id={name} onClick={name => handleOnClick(name)} className={style.deletebtn}> X </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemRenderer
