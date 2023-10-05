import toast from "react-hot-toast";
import useAuthContext from "../../useAuthContext";
import FacebookLogin from "./FacebookLogin";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LoginType = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { googleLogin, githubLogin, facebookLogin } = useAuthContext();
  // handleLogin
  const handleLogin = (media) => {
    media()
      .then(() => {
        toast.success("Login success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(() => {
        toast.error("Login failed");
      });
  };
  return (
    <div>
      <p onClick={() => handleLogin(googleLogin)}>
        <GoogleLogin></GoogleLogin>
      </p>
      <p onClick={() => handleLogin(facebookLogin)}>
        <FacebookLogin></FacebookLogin>
      </p>
      <p onClick={() => handleLogin(githubLogin)}>
        <GithubLogin></GithubLogin>
      </p>
    </div>
  );
};

export default LoginType;
