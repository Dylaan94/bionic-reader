import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #f7f7f8;
  height: 95vh;

  .inputDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 900px;
    max-height: auto;
    min-height: 80vh;
    background: #f7f7f8;
    padding-top: 1em;
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
    box-shadow: 1px 1px 5px #ced4da;
  }

  .inputButtons {
    button {
      height: 2em;
      width: 5em;
      color: white;
      font-size: 1em;
      border: none;
      border-radius: 5px;
      margin: 0.5em;
    }

    button:hover {
      cursor: pointer;
      font-size: 1.05em;
    }

    .convertBtn {
      background: #6a994e;
    }

    .clearBtn {
      background: #d62828;
    }
  }
`;

const DisplayDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #f7f7f8;
  height: 95vh;

  .displayDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 900px;
    max-height: auto;
    min-height: 80vh;
    background: #f7f7f8;
    padding-top: 1em;
  }

  .convertedText {
    font-size: 1em;
    width: 90%;
    height: 90%;
    border-radius: 20px;
    padding: 1em;
    background: white;
    box-shadow: 1px 1px 5px #ced4da;
  }

  .displayButtons {
    button {
      height: 2em;
      width: 5em;
      color: white;
      font-size: 1em;
      border: none;
      border-radius: 5px;
      margin: 0.5em;
    }

    button:hover {
      cursor: pointer;
      font-size: 1.05em;
    }

    .goBackBtn {
      background: #6a994e;
    }
  }
`;

const MainComponentStyles = {
  InputDiv: InputDiv,
  DisplayDiv: DisplayDiv
};

export default MainComponentStyles;
