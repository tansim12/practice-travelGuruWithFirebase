import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <section className="  max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 my-5">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Toaster/>
      </div>
    </section>
  );
};

export default Root;
