import toast, { Toaster } from "react-hot-toast";
import useAuthContext from "../../useAuthContext";

const VerifyAccont = () => {
  const { verifyAccount } = useAuthContext();
  const handleVerifyAccount = () => {
    verifyAccount()
      .then(() => {
        toast.success(
          "Please check your email address and verify your account"
        );
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <p
        onClick={handleVerifyAccount}
        className="text-black btn btn-ghost w-full btn-outline "
      >
        Verify Account
      </p>
    </div>
  );
};

export default VerifyAccont;
