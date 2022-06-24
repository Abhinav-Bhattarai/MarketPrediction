import React from 'react';
import useAuthorizationVerification from './Hooks/useAuthorizationVerification';

function App() {
  const authenticationStatus = useAuthorizationVerification();
  console.log(authenticationStatus);

  return (
    <React.Fragment>

    </React.Fragment>
  );
}

export default App;