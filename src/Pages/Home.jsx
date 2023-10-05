import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarWithSearch from "../Components/Navbar/NavbarWithSearch";
import useAuthContext from "../useAuthContext";
import { GrLinkNext } from "react-icons/gr";

const Home = () => {
  const [img, setImg] = useState(
    "https://i.ibb.co/q5wFGc4/photo-1607922276202-5007ffe552ca-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg"
  );
  const [findOneData, setFindOneData] = useState({});
  const { data, getSingleData, user } = useAuthContext();
  const navigate = useNavigate();
  const handleBg = (id) => {
    const findData = data.find((item) => item?.id === id);
    setFindOneData(findData);
    setImg(findData?.image);
  };
  const { name, description } = findOneData;

  // handleSendSingleData
  const handleSendSingleData = (id) => {
    const findData = data.find((item) => item?.id === id);
    getSingleData(findData);
    {
      user ? navigate("/placeDetails") : navigate("/login");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
        opacity: 1,
      }}
      className=" min-h-[100vh] "
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 ">
        <NavbarWithSearch></NavbarWithSearch>
      </div>

      <div className="min-h-[80vh] flex items-center">
        <div className="  sm:flex justify-around items-center max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 gap-10">
          {/* name , details , booking  */}
          <div>
            <p className=" text-3xl sm:text-5xl text-black font-extrabold ">{name}</p>
            <div className=" w-full sm:w-[70%] my-3 ">
              {description?.length < 100 ? (
                <span className="font-semibold ">{description}</span>
              ) : (
                <span className="font-semibold ">
                  {description?.slice(0, 100)}
                </span>
              )}
            </div>
            <button className="btn btn-primary font-extrabold my-3">
              Booking <GrLinkNext></GrLinkNext>
            </button>
          </div>

          {/* Carousel */}
          <div>
            <div className="carousel  w-[270px] md:w-[360px] lg:w-[500px] rounded-2xl ">
              {data.map((item) => (
                <div id={item?.id} className="carousel-item w-full ">
                  <div className="shadow-2xl  ">
                    {/* slider img  */}
                    <img
                      onClick={() => {
                        handleSendSingleData(item?.id);
                      }}
                      src={item?.image}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex  w-full py-2 gap-2 ">
              {data.map((item) => (
                <a
                  href={`#${item.id}`}
                  onClick={() => handleBg(item.id)}
                  className="btn btn-xs"
                >
                  {item.id}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
