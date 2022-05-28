import { React, useState } from "react";

// add sanitizor 

const MainComponent = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [isConverted, setIsConverted] = useState(false);

  const handleText = () => {
    let textArr = text.split(" ");

    let newArr = textArr.map((e) => {
      let strLen = Math.floor(e.length / 2);
      let substring = "";

      if (strLen === 0) {
        return "<b>" + e + "</b>";
      } else {
        substring = e.slice(0, strLen);
        return e.replace(substring, "<Strong>" + substring + "</Strong>");
      }
    });

    setConvertedText(newArr.join(" "));
    setIsConverted(true);

  };

  return (
    <>
      {!isConverted ? (
        <div>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></input>
          <button onClick={() => handleText()}> convert </button>
        </div>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: convertedText }}></div>
          <button
            onClick={() => {
              setIsConverted(false);
            }}
          >
            Go back
          </button>
        </>
      )}
    </>
  );
};

export default MainComponent;
