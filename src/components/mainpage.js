import React, { useState } from "react";
import "./mainpage.css";
import ToDoList from "./ToDoList";
const Mainpage = () => {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([{ name: "rohit", std: "third" }]);
  const [person, setPerson] = useState("");

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = (event) => {
    event.preventDefault();
    if (inputList === "") {
      alert("enter your name");
    } else {
      setPerson(inputList);
      setItems((oldArray) => [...oldArray, inputList]);

      setinputList("");
    }
  };

  const deleteItem = (id) => {
    // console.log("deleted");
    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      {/* <!-- navbar --> */}
      <div className="mainclass ">
        <nav className="navbar navbar-expand-lg  bg-light fixed-top topnavbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {" "}
              <img height="40" src="/wassup_logo_blue.png" alt="" srcSet="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item nav-item2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Chats
                  </a>
                </li>
                <li className="nav-item nav-item2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Groups
                  </a>
                </li>
                <li className="nav-item nav-item2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Status
                  </a>
                </li>
                <li className="nav-item nav-item2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Calls
                  </a>
                </li>
                <li className="nav-item nav-item2">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item nav-item2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* <!-- after navbar --> */}
        <div className="outermost">
          <div className="outer">
            {/* <!-- sidebarfirst --> */}
            <div className="inner secondnavbar">
              <div className="inner thirdnavbar" style={{ width: "400px" }}>
                <nav className="navbar navbar-expand-lg bg-light navbar2 py-0">
                  <div className="container-fluid navbar2">
                    <a className="navbar-brand" href="#">
                      {/* <!-- dropdown --> */}
                      <span className="material-symbols-outlined">menu</span>
                    </a>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                            style={{ fontWeight: "bold" }}
                          >
                            <u>Chats</u>
                          </a>
                        </li>
                      </ul>
                      <form className="d-flex">
                        <input
                          className="form-control me-2"
                          id="namewrite"
                          aria-label="Search"
                          type="text"
                          placeholder="Add a Contact..."
                          value={inputList}
                          onChange={itemEvent}
                        />
                        <button className="btn" onClick={listOfItems}>
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>

              {/* <div className="undernavbar2">
                <p className="para2"></p>
                <div className="under3">
                  <ol className="ol_style">
                    {/* <li>{inputList}</li> 
                    {items.map((itemvalue, index) => {
                      return (
                        <ToDoList
                          key={index}
                          id={index}
                          text={itemvalue}
                          onSelect={deleteItem()}
                        />
                      );
                    })}
                  </ol>
                  <p className="para6">user description here...</p>
                </div>
                <span
                  className="material-symbols-outlined"
                  style={{ marginLeft: "140px", marginTop: "15px" }}
                >
                  more_vert
                </span>
              </div> */}
              {items === " "
                ? "no users"
                : items.map((ele) => {
                    return (
                      <div className="undernavbar2">
                        <p className="para2"></p>
                        <div className="under3">
                          <h6>{ele.name}</h6>
                        </div>
                        <h6>{ele.std}</h6>
                        <span
                          className="material-symbols-outlined"
                          style={{ marginLeft: "140px", marginTop: "15px" }}
                        >
                          more_vert
                        </span>
                      </div>
                    );
                  })}
            </div>

            {/* <!-- sidebarsecond --> */}
            <div className="inner" style={{ marginBottom: "0px" }}>
              <section className="chat_section" style={{ marginBottom: "0px" }}>
                <div className="brand">
                  <div
                    className="wassuparea"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    {/* <!-- <img height="40" src="/wassup_logo_blue.png" alt="" srcset=""> --> */}
                    <h1>{person}</h1>

                    <span
                      className="material-symbols-outlined"
                      style={{
                        marginLeft: "680px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    >
                      settings
                    </span>
                    <span className="material-symbols-outlined">more_vert</span>
                  </div>
                </div>
                <div className="message_area"></div>
                <div
                  className="bottomtext"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "rgb(152, 251, 198)",
                    border: "1px solid grey",
                    borderRadius: "4px",
                  }}
                >
                  <span className="material-symbols-outlined">
                    create_new_folder
                  </span>
                  <textarea
                    id="textarea"
                    cols="30"
                    rows="1"
                    placeholder="Write a message..."
                    style={{
                      backgroundColor: "rgb(160, 248, 208)",
                      marginBottom: "0px",
                    }}
                  ></textarea>
                  <span className="material-symbols-outlined">
                    keyboard_voice
                  </span>
                  <span className="material-symbols-outlined">backspace</span>
                  <span className="material-symbols-outlined">add_box</span>
                  <span className="material-symbols-outlined">more_vert</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <script src="/socket.io/socket.io.js"></script>
      <script src="/client.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Mainpage;
