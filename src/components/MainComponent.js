import { React, useState } from "react";
import MainComponentStyles from "./styles/MainComponentStyles";

// add sanitizor

const MainComponent = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [isConverted, setIsConverted] = useState(false);

  const handleText = () => {
    // splits text at space and linebreak
    let textArr = text.split(/( |\n)/);

    let newArr = textArr.map((e) => {
      let strLen = Math.floor(e.length / 2);
      let substring = "";

      if (e === "\n") {
        // add linebreak
        return "<br>"
      } else if (strLen === 0) {
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
        <MainComponentStyles.InputDiv>
          <div className="inputDiv">
            <textarea
              type="text"
              placeholder="paste text here..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
            <div className="inputButtons">
              <button className="convertBtn" onClick={() => handleText()}>
                convert
              </button>
              <button
                className="clearBtn"
                onClick={() => {
                  setText("");
                  setConvertedText("");
                }}
              >
                clear
              </button>
            </div>
          </div>
        </MainComponentStyles.InputDiv>
      ) : (
        <>
          <MainComponentStyles.DisplayDiv>
            <div className="displayDiv">
              <div
                className="convertedText"
                dangerouslySetInnerHTML={{ __html: convertedText }}
              ></div>
              <div className="displayButtons">
                <button
                  className="goBackBtn"
                  onClick={() => {
                    setIsConverted(false);
                  }}
                >
                  Go back
                </button>
              </div>
            </div>
          </MainComponentStyles.DisplayDiv>
        </>
      )}
    </>
  );
};

export default MainComponent;
