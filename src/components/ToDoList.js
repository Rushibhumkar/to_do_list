import React from "react";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <>
      <div className="list_inline">
        <span
          className="material-symbols-outlined "
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete
        </span>

        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
