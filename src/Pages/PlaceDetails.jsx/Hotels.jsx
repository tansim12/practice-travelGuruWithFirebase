import Rating from "react-rating";

const Hotels = ({ hotels }) => {
  return (
    <div>
      <div className="drawer drawer-first">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary text-white font-bold"
          >
            {" "}
            Hotels
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-[270px] sm:w-96 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {hotels?.map((item) => (
              <div
                key={item?.hotel_id}
                className="my-4 bg-gray-100 p-2 rounded-lg"
              >
                <div>
                  <div>
                    <img
                      src={item?.hotel_img}
                      alt={item?.hotel_name}
                      className="rounded-lg"
                    />
                  </div>
                  {/* name  */}
                  <p className="font-bold my-2 text-2xl">{item?.hotel_name}</p>
                  {/* title  */}

                  <p className="text-xl font-semibold my-2">{item?.title}</p>

                  {/* description */}
                  <p className=" text-xs">{item?.description}</p>

                  <p>
                    <span className="font-semibold text-xl ">
                      Price :$ {item?.price}
                    </span>{" "}
                    <span>/ per night</span>
                    {/* rating  */}
                    <div className="flex items-center gap-2 my-3">
                      {" "}
                      <p className=" font-semibold">Rating :</p>
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
                          initialRating={item?.rating}
                          readonly
                        />
                      </div>{" "}
                      <br />
                    </div>
                  </p>
                </div>
                {/* rating div end  */}
                <button className="my-1 btn btn-primary btn-sm text-white font-semibold">
                  Booking
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
