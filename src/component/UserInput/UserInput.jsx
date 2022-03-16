import React, { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import "./UserInput.css";
export default function UserInput(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredage, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function dismiss() {
    setError(null);
  }

  function handleUsername(event) {
    setEnteredUsername(event.target.value);
  }
  function handleAge(event) {
    setEnteredAge(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: "Invalid Age",
        message: "Age cant be less than 0!",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredage);
    setEnteredUsername("");
    setEnteredAge("");
  }

  return (
    <>
      {error && (
        <ErrorModal
          dismiss={dismiss}
          title={error.title}
          message={error.message}
        />
      )}
      <section>
        <div className="rounded-border w-50 m-auto my-5 bg-white p-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label className="my-2 fw-bold" htmlFor="username">
                Username :
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={handleUsername}
                value={enteredUsername}
              />
            </div>
            <div className="form-group my-3">
              {" "}
              <label className="my-2 fw-bold" htmlFor="age">
                Age (Years) :
              </label>
              <input
                onChange={handleAge}
                type="text"
                className="form-control"
                id="age"
                value={enteredage}
              />
            </div>
            <button type="submit" className="btn btn-outline-dark my-3">
              Add User
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
