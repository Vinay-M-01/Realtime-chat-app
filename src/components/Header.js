import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import deleteIcon from '../assests/delete.png'
import { useSelector } from "react-redux";
import { db } from '../firebase';
import { doc, deleteDoc } from "firebase/firestore"
import { useDispatch } from "react-redux";
import { deleteActions } from "../store/index";

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`,
    deleteIcon: `h-8 w-8 bg-white rounded-full`
}

const Header = (props) => {
  const msgId = useSelector(state => state.id)
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  console.log(user)
  const showButton = useSelector(state=>state.showDeleteBtn)

  const deleteMsgHandler =async()=>{
    await deleteDoc(doc(db, "messages", msgId))
    dispatch(deleteActions.toggleDelete())
  }

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
      {showButton ? <img src={deleteIcon} alt="" className={style.deleteIcon} onClick={deleteMsgHandler}/> : null }

    </div>
  );
}
 
export default Header;
