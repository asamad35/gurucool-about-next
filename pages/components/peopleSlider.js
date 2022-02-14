import Slider from "react-slick";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function PeopleSlider() {
  return (
    <div className="peopleSlider overflow-hidden">
      <Slider {...settings}>
        <div className="relative h-screen w-screen bg-[url('../public/slider-2.jpg')] bg-cover overflow-hidden ">
          <div className="modal flex absolute z-10 top-0 left-0 h-full w-full bg-black opacity-70 "></div>
          <div className="textContainer absolute left-[10%] top-1/4 z-20 pr-4 ">
            <h1 className="text-primaryColor font-extrabold pb-4 text-5xl md:text-7xl">
              Connecting <span className=" text-4xl text-white">the world</span>
            </h1>
            <p className="text-white text-xl pb-4 tracking-wide font-light md:text-2xl">
              An educational networking platform that connects learners and
              educators.
            </p>
            <Link href="people/connecting">
              <a className="text-primaryColor underline">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="relative h-screen w-screen bg-[url('../public/slider-1.jpg')] bg-cover overflow-hidden">
          <div className="modal flex absolute z-10 top-0 left-0 h-full w-full bg-black opacity-70 "></div>
          <div className="textContainer absolute left-[10%] top-1/4 z-20 pr-4 ">
            <h1 className="text-primaryColor font-extrabold pb-4 text-5xl md:text-7xl">
              Empathizing <span className=" text-4xl text-white">with you</span>
            </h1>
            <p className="text-white text-xl pb-4 tracking-wide font-light md:text-2xl">
              A safe and supportive space for you to learn, grow and thrive.
            </p>
            <Link href="people/empathy">
              <a className="text-primaryColor underline">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="relative h-screen w-screen bg-[url('../public/slider-3.jpg')] bg-cover overflow-hidden">
          <div className="modal flex absolute z-10 top-0 left-0 h-full w-full bg-black opacity-70 "></div>
          <div className="textContainer absolute left-[10%] top-1/4 z-20 pr-4 ">
            <h1 className="text-primaryColor font-extrabold pb-4 text-5xl md:text-7xl">
              Democratizing{" "}
              <span className=" text-4xl text-white">education</span>
            </h1>
            <p className="text-white text-xl pb-4 tracking-wide font-light md:text-2xl">
              An open school with free, quality and hyperlocal education.
            </p>
            <Link href="people/democratizing">
              <a className="text-primaryColor underline">Learn More</a>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}
