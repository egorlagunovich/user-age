import styled from "styled-components";

const ErrorMessageDiv = styled.div`
  width: 40%;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
  footer {
    background-color: rgb(84, 1, 89);
    color: white;
    padding: 10px;
    border: 2px solid rgb(84, 1, 89);
  }
  div {
    color: black;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
  }
  button {
    font-size: 20px;
    float: right;
    margin: 50px 20px 20px 0px;
    padding: 10px;
    background-color: #540159;
    color: white;
    border-radius: 5px;
  }
  button:hover {
    background-color: salmon;
  }
`;

export default ErrorMessageDiv;
