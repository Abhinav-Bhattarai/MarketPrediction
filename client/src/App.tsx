import React from "react";
import useAuthorizationVerification from "./Hooks/useAuthorizationVerification";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const authenticationStatus = useAuthorizationVerification();
  console.log(authenticationStatus)

  return (
    <React.Fragment>
      <Button variant="primary" size="lg">Hello</Button>
    </React.Fragment>
  );
}

export default App;