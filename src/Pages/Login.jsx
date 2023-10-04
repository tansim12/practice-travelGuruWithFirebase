import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginType from "../Components/LoginType/LoginType";
import useAuthContext from "../useAuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const patten = /[A-Z]/;
  // handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return toast.error("password must be at least 6");
    }
    if (!patten.test(password)) {
      return toast.error("Password should be one capital letter 'passworD'");
    }

    login(email, password)
      .then(() => {
        toast.success("login successfully done");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(() => toast.error("Login failed"));
  };
  return (
    <div>
      <div className="flex justify-center my-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Please Log in</h1>
            <p className="text-sm ">Sign in to access your account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>

                  <button
                    // onClick={handleForgotPassword}
                    type="button"
                    className="text-xs hover:underline text-black"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className=" btn btn-accent  w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Login
                </button>
              </div>
              <p className="px-6 text-sm text-center text-black">
                Do not have an account yet?
                <Link
                  to={"/register"}
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-blue-600"
                >
                  Register
                </Link>
                .
              </p>
            </div>
          </form>
          <div className="text-black my-5  hover:cursor-pointer">
            <LoginType></LoginType>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
