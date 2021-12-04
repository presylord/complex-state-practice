import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function onEntry(event) {
    const { name, value } = event.target;
    setContact(function (previous) {
      if (name === "fName") {
        return {
          fName: value,
          lName: previous.lName
        };
      } else if (name === "lName") {
        return {
          fName: previous.fName,
          lName: value
        };
      } else if (name === "email") {
        return {
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={onEntry} />
        <input name="lName" placeholder="Last Name" onChange={onEntry} />
        <input name="email" placeholder="Email" onChange={onEntry} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
