import React from 'react';
import {auth} from '../firebase'
import { useDispatch} from 'react-redux';
import {deleteActions} from '../store/index'


const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }, {key}, props) => {
  const dispatch = useDispatch()
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  const deleteHandler = async(id)=>{
    console.log(id)
    dispatch(deleteActions.toggleDelete(id))
  }

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p onClick={() => deleteHandler(message.id)}>{message.text}</p>
        
      </div>
    </div>
  );
};

export default Message;