import React from "react";
import "./ErrorModal.css";
export default function ErrorModal(props) {
  return (
    <>
      <div onClick={props.dismiss} className="backdrop"></div>
      <div id="modal" className="w-50 mx-auto rounded-border my-5 bg-light">
        <header className="bg-dark text-white p-3">
          <h2>{props.title}</h2>
        </header>
        <div className="p-3">
          <p>{props.message}</p>
        </div>
        <footer className="p-3 text-end">
          <button
            onClick={props.dismiss}
            className="dismiss btn btn-outline-danger"
          >
            Okay
          </button>
        </footer>
      </div>
    </>
  );
}
