import toast from "react-hot-toast";
import useAuthContext from "../../useAuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();
  // handleLogOut
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged out successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <p
        onClick={handleLogOut}
        className="text-white font-extrabold bg-primary btn  w-full btn-outline "
      >
        Logout
      </p>
    </div>
  );
};

export default Logout;
