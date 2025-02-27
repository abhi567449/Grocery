import React, { useState } from 'react'

export default function GroceryItem({items,onDelete}) {

    const[checked,setChecked] = useState(false)
  return (
    <div className='grocery-item'>
      <div className='name-task'>
    <input type="checkbox" onChange={()=>setChecked(!checked)} checked={checked}/>
    <p>{items}</p>
    </div>
    <button className='grocery-delete' onClick={()=>
        {
            if(checked)
            {
                onDelete();
                setChecked(!checked)
            }
            else
            {
                alert('Please check the item to delete.')
            }
        }}>Delete</button>
    </div>
  )
}
