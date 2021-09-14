import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Signup from './Component/Signup';
import EnterBasicInfo from './Component/EnterBasicInfo';
import Home from './Component/Home';
import Edit from './Component/Edit';

const base_url = "https://testapi.webexcellis.in/";

const App = () => {

  const [users, setUsers] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  })
  const [selectedUser, setSelectedUser] = useState({})

  return (
    <div>
      <Switch>
        <Route path='/' exact render={() => <Signup users={users} setUsers={setUsers} />} />
        <Route path='/infoform' render={() => <EnterBasicInfo users={users} setUsers={setUsers} baseUrl={base_url} />} />
        <Route path='/home' render={() => <Home baseUrl={base_url} setSelectedUser={setSelectedUser} />} />
        <Route path='/editform' render={() => <Edit baseUrl={base_url} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />

      </Switch>

    </div>
  )
}
export default App;
