import React, { useState } from "react";
import UserForm from "../../styles/userFormStyle";
import ErrorComponent from "../errorComponent/ErrorComponent";

export default function UserFormBlock(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState("");
  const onNameHandle = (e) => {
    setUsername(e.target.value);
  };
  const onAgeHandle = (e) => {
    setAge(e.target.value);
  };
  const onButtonSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsError(true);
      return;
    }
    if (+age < 0) {
      setIsError(true);
      return;
    }
    props.userSetter(username, age);
    setAge("");
    setUsername("");
  };
  return (
    <>
      {isError && (
        <ErrorComponent
          title={"Invalid Input"}
          text={
            "Please enter a valid name and age (non-empty values and age>0)."
          }
          setIsError={setIsError}
        />
      )}
      <UserForm>
        <form onSubmit={onButtonSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={onNameHandle}
            value={username}
          />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" onChange={onAgeHandle} value={age} />
          <div>
            <button>Add User</button>
          </div>
        </form>
      </UserForm>
    </>
  );
}
