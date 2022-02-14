import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default function HomeSlider() {
  return (
    <div className="m-auto translate-y-48 ">
      <Slider {...settings}>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            22 June 2019
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Inaugurated Gurucool – India's Next Gen Coaching Classes.
          </h3>
        </div>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            11 Feb 2020
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Shot first podcast at Gurucool Studio.
          </h3>
        </div>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            24 March 2020
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Lockdown in India. All centers closed.
          </h3>
        </div>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            4 April 2020
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Co-Give 20: A call for sustainable and continuous help amidst the
            uncertainty of lockdown & fragile economy.
          </h3>
        </div>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            2 Feb 2019
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Gurucool Learning Cafe was inaugurated.
          </h3>
        </div>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            4 March 2019
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Announced 'The Parking Kids Project'.
          </h3>
        </div>
        <div className="pr-0 flex !important flex-col justify-center items-center px-8">
          <span className="text-primaryColor text-2xl text-normal text-center ">
            {" "}
            15 March 2019
          </span>
          <h3 className="text-white text-2xl font-medium mt-1 text-center">
            Launched India's first formalised Home tuition service.
          </h3>
        </div>
      </Slider>
    </div>
  );
}
