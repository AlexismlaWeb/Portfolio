import React, { useState } from "react";

function ScreenLogInAdmin() {
  const [LogIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    if (LogIn.email && LogIn.password) {
      console.log(LogIn);
    }
  };

  return (
    <div>
      <h1>Admin </h1>
      <input
        type="email"
        onChange={(e) => setLogIn({ ...LogIn, email: e.target.value })}
      />
      <input
        type="password"
        onChange={(e) => setLogIn({ ...LogIn, password: e.target.value })}
      />
      <input
        type="button"
        name="Connexion"
        value={"CONNEXION"}
        onClick={() => handleClick()}
      />
    </div>
  );
}
export default ScreenLogInAdmin;
