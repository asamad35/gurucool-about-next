import Slider from "react-slick";
import Image from "next/image";

import image1 from "../../public/slide-1.jpg";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function EmpathySlider() {
  return (
    <div className="section empathySlider">
      <h1 className="text-center text-6xl font-medium mb-12">Our stories</h1>
      <Slider {...settings}>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4">The Yellow Pen</h1>
          <Image src={image1}></Image>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4">The Yellow Pen</h1>
          <Image src={image1}></Image>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4">The Yellow Pen</h1>
          <Image src={image1}></Image>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4">The Yellow Pen</h1>
          <Image src={image1}></Image>
        </div>
      </Slider>
    </div>
  );
}
