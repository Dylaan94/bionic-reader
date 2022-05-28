import { React, useState } from "react";

const MainComponent = () => {
  const [text, setText] = useState("");
  const [updatedText, setUpdatedText] = useState("");

  const handleText = () => {
    let textArr = text.split(" ");

    let newArr = textArr.map((e) => {
      let strLen = Math.floor(e.length / 2);
      let substring = "";

      if (strLen === 0) {
        return "<b>" + e + "</b>";
      } else {
        substring = e.slice(0, strLen);
        return e.replace(substring, "<b>" + substring + "</b>");
      }
        
    });

    console.log(newArr);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <button onClick={() => handleText()}> convert </button>
    </div>
  );
};

export default MainComponent;
