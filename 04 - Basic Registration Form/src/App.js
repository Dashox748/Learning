import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleFirstNameInput = (event) => {
    setUsers({ ...users, firstName: event.target.value });
  };
  const handleLastNameInput = (event) => {
    setUsers({ ...users, lastName: event.target.value });
  };
  const handleEmailInput = (event) => {
    setUsers({ ...users, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {submitted && users.firstName && users.lastName && users.email ? (
          <div className="success">You Successfully Registered </div>
        ) : null}
        <div className="form-input">
          <input
            value={users.firstName}
            name="firstName"
            placeholder="First Name"
            className="first_name"
            onChange={handleFirstNameInput}
          />
          {!users.firstName && submitted ? (
            <span>First Name Cannot Be Empty</span>
          ) : null}
        </div>
        <div className="form-input">
          <input
            value={users.lastName}
            name="lastName"
            placeholder="Last Name"
            className="last_name"
            onChange={handleLastNameInput}
          />
          {!users.lastName && submitted ? (
            <span>Last Name Cannot Be Empty </span>
          ) : null}
        </div>
        <div className="form-input">
          <input
            value={users.email}
            name="email"
            placeholder="email"
            className="email"
            onChange={handleEmailInput}
          />
          {!users.email && submitted ? (
            <span>Email Cannot Be Empty</span>
          ) : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
