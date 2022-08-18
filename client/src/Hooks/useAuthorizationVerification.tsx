import { useEffect, useState } from "react";
import { axios } from "../Axios";

interface AuthorizationData {
  authorization_status: boolean;
  error: boolean;
}

const useAuthorizationVerification = () => {
  const [auth_status, setAuthStatus] = useState<null | boolean>(null);

  useEffect(() => {
    const Authorize = async () => {
      const data: AuthorizationData = await axios.get("/authorize");
      if (data.error === false && data.authorization_status === true) {
        setAuthStatus(true);
        return;
      }
      setAuthStatus(false);
    };
    Authorize();
  }, []);

  return auth_status;
};

export default useAuthorizationVerification;