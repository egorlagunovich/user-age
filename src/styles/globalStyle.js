import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  word-wrap: break-word;
}
html {
  font-size: 62.5%;
  line-height: 1.6;
  /* Footer support */
  position: relative;
  min-height: 100%;
}
body {
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  background-color: #1E1D1E;
  color: black;
}
button,
input{
  border: 1px solid gray;
  outline: none;
  color: black;
  font-family: inherit;
  font-size: inherit;
}
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
