import styled from "styled-components";

const HeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5vh;
  width: 100%;
  background: white;
  border-bottom: solid 1px #f7f7f8;

  h1 {
    font-size: 1.3rem;
    margin-left: 2rem;
    font-weight: 500;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    font-size: 1.8em;
    margin-left: auto;
    margin-right: 2rem;
    text-decoration: none;
    p {
      font-size: 0.5em;
    }
  }

  a:hover {
    color: #00b4d8;
  }
`;

const HeaderStyles = {
  HeaderMain: HeaderMain,
};

export default HeaderStyles;
