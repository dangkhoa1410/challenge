import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { getUsers, getItems, getAgeWithCount } from "./components/API";

const App = () => {
  const [users, setUsers] = useState(null);
  const [allItems, setAllItems] = useState(null);
  useEffect(() => {
    getUsers().then((users) => setUsers(users));
    getItems().then((items) => setAllItems(items));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>All Users </h1>
        <p>Users and their age</p>
        <Table
          thead={["Username", "Age"]}
          tcol={["username", "age"]}
          tdata={users}
        />
      </div>
      <div className="row">
        <h1>Age Demographic of Users With</h1>
        <select className="col-2 mb-2">
          {allItems &&
            allItems.map((item) => {
              return (
                <option key={item} value={item} >
                  {item}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default App;
