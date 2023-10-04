import toast from "react-hot-toast";
import useAuthContext from "../../useAuthContext";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const { deleteAccount } = useAuthContext();
  const navigate = useNavigate();
  const handleDeleteAccount = () => {
    const isDelete = confirm("Are you sure you want to delete this account?");
    if (isDelete) {
      deleteAccount()
        .then(() => {
          toast.success("Your account  deleted successfully");
        })
        .catch((err) => {
          navigate("/login");
          toast.error("Please re-login And delete your account");
        });
    }
  };
  return (
    <div>
      <p
        onClick={handleDeleteAccount}
        className="text-black btn btn-ghost w-full btn-outline "
      >
        Delete Account
      </p>
    </div>
  );
};

export default DeleteAccount;
