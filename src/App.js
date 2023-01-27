import { useState } from "react";
import AppDiv from "./AppDiv";
import UserFormBlock from "./components/userForm/UserFormBlock";
import Users from "./components/users/Users";

function App() {
  const initialUsersList = [];
  const [usersList, setUsersList] = useState(initialUsersList);

  const userSetter = (username, age) => {
    setUsersList((prevState) => [
      { username, age, id: Math.random().toString() },
      ...prevState,
    ]);
  };
  return (
    <AppDiv>
      <UserFormBlock userSetter={userSetter} />
      <Users usersList={usersList} />
    </AppDiv>
  );
}

export default App;
