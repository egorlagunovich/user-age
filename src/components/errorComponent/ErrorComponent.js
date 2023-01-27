import React from "react";
import DivBlack from "../../styles/divBlack";
import ErrorMessageDiv from "../../styles/ErrorMessageDiv";

export default function ErrorComponent(props) {
  const onHandle = () => {
    props.setIsError(false);
  };
  return (
    <>
      <DivBlack onClick={onHandle}/>
      <ErrorMessageDiv>
        <footer>
          <h1>{props.title}</h1>
        </footer>
        <div>{props.text}</div>
        <button onClick={onHandle}>Okay</button>
      </ErrorMessageDiv>
    </>
  );
}
