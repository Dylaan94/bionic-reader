import styled from "styled-components";

const InputDiv = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: center;
  background: #f7f7f8;

  .inputDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-height: auto;
    min-height: 80vh;
    background: #f7f7f8;
  }

  textArea {
    font-family: "Open Sans", sans-serif;
    font-size: 1em;
    width: 90%;
    height: 90%;
    resize: none;
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 1em;
  }
`;

const DisplayDiv = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: center;
  background: #f7f7f8;

  .displayDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-height: auto;
    min-height: 80vh;
    background: #f7f7f8;
  }

  .convertedText {
    font-size: 1em;
    width: 90%;
    height: 90%;
    border-radius: 20px;
    padding: 1em;
    background: white;
  }
`;

const MainComponentStyles = {
  InputDiv: InputDiv,
  DisplayDiv: DisplayDiv
};

export default MainComponentStyles;
