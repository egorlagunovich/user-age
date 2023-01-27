import React from "react";
import UserForm from "../../styles/userFormStyle";
import User from "./User";

export default function Users(props) {
  const message = <p>No added users</p>;
  if (props.usersList.length === 0) {
    return <UserForm>{message}</UserForm>;
  }
  return (
    <UserForm>
      <h1>Users</h1>
      {props.usersList.map((user) => (
        <User username={user.username} age={user.age} key={user.id} />
      ))}
    </UserForm>
  );
}
