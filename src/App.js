import NewUser from "./components/NewUser/NewUser";
import InvalidInput from "./components/InvalidMessage/InvalidInput";
import React, { useState } from "react";
import Users from "./components/Users/Users";
function App() {
  const [showInvalidMessage, setShowIvalidMessage] = useState(false);

  const [users, setUsers] = useState([]);

  const hideInvalidMessage = () => {
    setShowIvalidMessage(false);
  };
  const isValid = (showMessage) => {
    setShowIvalidMessage(showMessage);
  };

  const addNewUserData = (userData) => {
    setUsers(prevUsers => {
      return [userData, ...prevUsers];
    });
  };

  return (
    <div>
      <InvalidInput
        invalidMessageBool={showInvalidMessage}
        clearInvalidMessageHandler={hideInvalidMessage}
      />
      <NewUser inValidMessage={isValid} newUserDataHandler={addNewUserData}/>
      <Users users={users} />
    </div>
  );
}

export default App;
