import React from "react";
import "./UsersList.css";

export default function UsersList(props) {
  return (
    <div className="rounded-border w-50 m-auto my-2 bg-white p-3">
      <ul className="users-list list-unstyled d-flex flex-column">
        {props.users.map((user, index) => (
          <li key={index} className="my-2">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}
