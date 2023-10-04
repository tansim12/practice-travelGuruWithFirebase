import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const useAuthContext = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuthContext;
