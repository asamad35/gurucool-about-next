// import heroVideo from "../../public/gurucool.mp4";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Connecting = () => {
  return (
    <div>
      {/* sectionVideo */}
      {/* <section className="w-screen h-screen">
        <video autoPlay loop style={{ width: "500px", height: "500px" }}>
          <source src={"../../public/gurucool.mp4"} type="video/mp4" />
        </video>
      </section> */}

      {/* section Educverse */}
      <section className="section">
        <h1 className=" p-4 text-center text-enter text-3xl font-semibold mb-12 md:text-5xl">
          <span className="text-primaryColor">Gurucool </span>Eduverse
        </h1>
        <p className="text-center m-auto max-w-3xl font-medium text-xl sm:text-2xl mb-16">
          We help you to connect purposefully with learners and educators, find
          communities, and grow together in a Phygital Reality.
        </p>
        <div className="flex gap-4 justify-center">
          <FontAwesomeIcon className="w-7" icon={faFacebookSquare} />
          <FontAwesomeIcon className="w-7" icon={faInstagram} />
          <FontAwesomeIcon className="w-7" icon={faLinkedin} />
          <FontAwesomeIcon className="w-7" icon={faTwitter} />
        </div>
      </section>
      {/* section grid */}

      <section className="section gap-4 grid md:grid-cols-2 ">
        <h1 className="col-span-full text-xl font-medium text-[#677B8C]">
          REPORTS SAY OTHERWISE
        </h1>
        <div className="grid grid-rows-2 gap-4  ">
          <div className="flex items-center bg-yellow-100 ">
            <Image
              src="/logo.png"
              height="200px"
              width="800px"
              objectFit="contain"
            ></Image>
          </div>
          <div className=" bg-[#c8e7fa] flex ">
            <h1 className=" p-4 text-center text-xl font-medium m-auto text-[#136098] ">
              Social Media is Killing Your Friendships
            </h1>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="grid lg:grid-cols-2">
            <div className=" bg-[#fbd6b7] flex ">
              <h1 className=" p-4 text-center text-xl font-medium m-auto text-[#aa4829] ">
                Social Media is Killing Your Friendships
              </h1>
            </div>
            <div className="flex">
              <Image
                src="/connecting-img1.jpg"
                height="600px"
                width="1500px"
                objectFit="cover"
              ></Image>
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="flex">
              <Image
                src="/connecting-img1.jpg"
                height="600px"
                width="1500px"
                objectFit="cover"
              ></Image>
            </div>
            <div className=" bg-[#92c8ba] flex ">
              <h1 className=" p-4 text-center text-xl font-medium m-auto text-[#194f53] ">
                Social Media is Killing Your Friendships
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connecting;
