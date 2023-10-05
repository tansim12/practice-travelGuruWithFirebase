import { Vortex } from "react-loader-spinner";
import useAuthContext from "../useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useAuthContext();
  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <div>
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.state}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
