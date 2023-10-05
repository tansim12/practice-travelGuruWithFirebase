import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  return (
    <section>
      <div>
        <div className="  max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12  ">
          {location?.pathname !== "/" && <Navbar></Navbar>}
        </div>
        <Outlet></Outlet>
        <Toaster />
      </div>
    </section>
  );
};

export default Root;
