import React, { useState } from "react";
import UserInput from "./component/UserInput/UserInput";
import UsersList from "./component/UsersList/UsersList";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHalder = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: username, age: userAge }];
    });
  };

  return (
    <>
      <UserInput onAddUser={addUserHalder} />
      <UsersList users={usersList} />
    </>
  );
}
