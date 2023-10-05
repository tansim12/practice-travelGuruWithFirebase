import { AiFillEye } from "react-icons/ai";
import useAuthContext from "../../useAuthContext";
import { FaLocationDot } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import Rating from "react-rating";
import HistoricalPlace from "./HistoricalPlace";
import Hotels from "./Hotels";

const PlaceDetails = () => {
  const { singleDataToSlider } = useAuthContext();
  const {
    image,
    bestTimeToVisit,
    description,
    historicalPlace,
    location,
    name,
    moment,
    price,
    rating,
    reviews,
    hotels,
  } = singleDataToSlider;

  //   handleHotels

  return (
    <section className="  max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 my-5">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 ">
        {/* details , history place  */}
        <div className="col-span-3 p-5">
          <div className="flex justify-between p-3 items-center gap-3">
            <p className="text-xl sm:text-3xl font-extrabold mb-5 text-black"> {name}</p>
            <div>
              <Hotels hotels={hotels} ></Hotels>
            </div>
          </div>
          <div>
            <img className="rounded-3xl" src={image} alt="" />
          </div>
          {/* location , reviews , bestTime */}
          <div className="my-5 font-bold text-xl flex justify-between">
            {/* location */}
            <div className=" flex items-center gap-3 ">
              <FaLocationDot></FaLocationDot>
              <p>{location}</p>
            </div>
            {/* reviews  */}
            <div className="flex items-center gap-3 ">
              <AiFillEye></AiFillEye>
              <p>Total Views: {reviews}</p>
            </div>
          </div>
          {/* best time  */}
          <div className="flex items-center gap-3 text-2xl font-semibold ">
            <p> 👍🏿 Best Time to Visit : {bestTimeToVisit}</p>
          </div>
          <p className="my-3 md:text-base text-xs">{description}</p>
          {/* money  */}
          <p className="flex items-center gap-5 text-base font-semibold  sm:text-2xl my-3">
            <FcMoneyTransfer></FcMoneyTransfer>Price : $ {price}
            <span className="text-base">/per vacation</span>
          </p>

          {/* rate ing */}
          <div className="flex items-center gap-3 my-3">
            {" "}
            <p className="text-2xl font-semibold">Rating :</p>
            <div>
              <Rating
                emptySymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                }
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                initialRating={rating}
                readonly
              />
            </div>
          </div>
          {/* historical place  */}
          <div>
            <h1 className="font-bold text-center mt-10 mb-2 text-2xl lg:text-4xl">
              Historical Place{" "}
            </h1>

            <hr className="border-2 border-black w-[40%] mb-4  mx-auto" />
            {singleDataToSlider && (
              <div className="sm:flex gap-5 ">
                {historicalPlace?.map((item, index) => (
                  <HistoricalPlace key={index} item={item}></HistoricalPlace>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* price  */}

        {/* moment picture  */}

        <div className="col-span-1">
          <p className="text-xl underline font-extrabold text-black p-5">
            Natural Moments
          </p>
          {moment?.map((item, index) => (
            <div key={index} className="p-3">
              <img className="rounded-xl" src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaceDetails;
