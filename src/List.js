import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({item, removeItem, editItem, canEdit}) => {
  
  return (
  <ul className="grocery-list">
    {item.map(((itemContent, i) => {
      return (
        <li className="grocery-item" key={i}>
          <div className="grocery-item-circle"></div>
          {itemContent}
          <div>
            <FaEdit className="grocery-item-icon" onClick={(e) => editItem(e, i)} />
            <FaTrash className="grocery-item-icon" onClick={() => removeItem(i)}/>
          </div>
        </li>
      )
    }))}
    
  </ul>
)
}

export default List
