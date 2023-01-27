import React from "react";
import UserDiv from "../../styles/userDiv";

export default function User(props) {
  return (
    <UserDiv>
      {props.username} ({props.age} years old)
    </UserDiv>
  );
}
