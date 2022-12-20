import React, { useState } from "react";
import "./homepage.css";
import ToDoList from "./ToDoList";
const Homepage = () => {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList === "") {
      alert("Enter a value");
    } else {
      setitems((olditems) => {
        return [...olditems, inputList];
      });
      setinputList("");
    }
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setitems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div_out">
        <div className="center_div_inn">
          <br />
          <h2>ToDo List</h2>
          <br />
          <div className="line">
            <input
              type="text"
              placeholder="Add a Item..."
              value={inputList}
              onChange={itemEvent}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={listOfItems}
            >
              +
            </button>
          </div>
          <ol className="ol_style">
            {/* <li>{inputList}</li> */}
            {items.map((itemvalue, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
