import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { getUsers, getItems, getAgeWithCount } from "./components/API";
import Loader from 'react-spinners/BeatLoader'

const App = () => {
  const [users, setUsers] = useState(null);
  const [allItems, setAllItems] = useState(null);
  const [thisItem, setThisItem] = useState(null);
  const [ageWithCount, setAgeWithCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [ApiLoading, SetApiLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getUsers(), getItems()]).then(([users, items]) => {
      setUsers(users);
      setAllItems(items);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {    
    thisItem && SetApiLoading(true) & getAgeWithCount(thisItem).then(data => {
        setAgeWithCount(data)
        SetApiLoading(false)})    
  }, [thisItem]);

  const SelectHandler = e => {
    // console.log(e.target.value)
    setThisItem(e.target.value)
  }

  return (
    <div className="container">
      <div className="row">
        <h1>All Users </h1>
        <p>Users and their age</p>
        {
          isLoading 
          ? <Loader />
          : <Table
          thead={["Username", "Age"]}
          tcol={["username", "age"]}
          tdata={users}
        />
        }
      </div>
      <div className="row">
        <h1>Age Demographic of Users With</h1>
        <select className="col-2 mb-4" onChange={SelectHandler}>
          {allItems &&
            allItems.map((item) => {
              return (
                <option key={item} value={item} >
                  {item}
                </option>
              );
            })}
        </select>
        {
          ApiLoading 
          ? <Loader />
          : <Table
          thead={["Age", "Count"]}
          tcol={["age", "count"]}
          tdata={ageWithCount}
        />
        }
        
      </div>
    </div>
  );
};

export default App;
