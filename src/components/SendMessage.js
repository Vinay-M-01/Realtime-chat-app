import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import emoji from "../assests/emoji.png";

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-xl focus:outline-none focus:ring focus:ring-white-300 focus:bg-gray-300 focus:text-black-900 `,
  button: `w-[20%] bg-green-500 rounded-full font-bold hover:bg-green-700`,
  emoji: `w-11 h-11`,
  picker: `fixed top-[200px] `,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setShowPicker(false);
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.form}>
      <div>
        <button
          className={style.emoji}
          onClick={() => setShowPicker(!showPicker)}
        >
          <img src={emoji} alt="" />
        </button>
        {showPicker ? (
          <div className={style.picker}>
            <Picker
              data={data}
              onEmojiSelect={(e) => setInput(input + e.native)}
            />
          </div>
        ) : null}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default SendMessage;
