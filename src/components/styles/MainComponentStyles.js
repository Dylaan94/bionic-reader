import styled from "styled-components";

const MainComponent = styled.div`
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
    width: 90%;
    height: 90%;
    resize: none;
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 1em;
  }
`;

const MainComponentStyles = {
  MainComponent: MainComponent,
};

export default MainComponentStyles;
