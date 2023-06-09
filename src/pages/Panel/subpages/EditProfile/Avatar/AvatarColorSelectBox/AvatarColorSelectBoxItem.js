import React, { useContext } from 'react'

//  Contexts
import { UserAvatarContext } from '../Avatar'

export default function AvatarColorSelectBoxItem(props) {
  const { setUserAvaterDetails } = useContext(UserAvatarContext);
  const changeHandler = () => {
    setUserAvaterDetails(prev => {
      return {
        bgColor: {
          id: props.id,
          color: props.color
        },
        avatar: prev.avatar
      }
    })
    props.setIsShowSelectBox(false)
  }

  console.log(props.isChecked)
  return (

    <div className=' p-2'>
      <input
        onChange={changeHandler}
        type="radio"
        name='avatar-bgColor'
        id={`avatar-bg-${props.id}`}
        value={props.id}
        className='hidden'
        checked={props.isChecked} />
      <label htmlFor={`avatar-bg-${props.id}`} className='cursor-pointer inline-block w-20 h-20 rounded-md hover:outline hover:outline-blue-400 relative' style={{ backgroundColor: props.color }}>
      </label>
    </div>
  )
}
