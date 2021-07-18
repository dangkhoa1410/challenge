import React, { useEffect, useState } from 'react'
import "./App.css";
import Table from './components/Table';
import {getUsers} from './components/API'

const App = () => {
  const [users, setUsers] = useState(null)
  useEffect (() =>{
    getUsers()
    .then(users => setUsers(users))
  },[])
  
  return (
    <div className="container">
      <div className="row">
      <h1>All Users </h1>
      <p>Users and their age</p>
      <Table thead={['Username','Age']} tcol={['username','age']} tdata={users} />
      </div>
    </div>
  )
}

export default App