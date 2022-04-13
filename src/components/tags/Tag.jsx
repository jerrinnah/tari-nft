import React from 'react'
import './tag.css'




function Tag(props) {
  return (
    <div className="tari__tag-container">
     <div className='tari__abi-placehoder'>
     <img src={props.src} alt="" />
     </div>
      <h1 className='tari__tag_title' >{props.tagTitle}</h1>
      <p className='tari__tag_info'>{props.info}</p>
   
    </div>
  )
}
export default Tag
