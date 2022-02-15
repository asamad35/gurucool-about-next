import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import empathyIcon from "../../public/empathy-icon.svg";
import empathyIcon2 from "../../public/empathy-icon2.svg";

import EmpathySlider from "../components/empathySlider";

import circle from "../../public/circle.svg";

const Empathy = () => {
  return (
    <div className="overflow-hidden">
      {/* sectionHero */}
      <section className="  h-screen w-screen bg-[url('../public/empathy.jpg')] bg-cover relative">
        <div className="absolute top-0 left-0 bg-black h-full w-full opacity-50 "></div>
        <div className="section relative">
          <h1 className="pt-16 font-bold mb-4 text-primaryColor text-4xl relative sm:text-5xl md:text-7xl">
            Takiwātanga
          </h1>
          <h2 className=" text-white italic border-b-4 mb-8 border-primaryColor max-w-[13rem] text-2xl md:text-3xl">
            noun Māori
          </h2>
          <p className="text-white text-2xl font-light md:text-3xl ">
            In their own space and time
          </p>
        </div>
      </section>
      {/* section circle */}
      <section className="section flex flex-col justify-between items-center md:flex-row md:py-16">
        <div className="basis-1/2 ">
          <p className="text-xl leading-8 ">
            Inspired by beautiful Maori word for Autism{" "}
            <span className="text-primaryColor"> "Takiwatanga"</span>, Gurucool
            is making education personalised and empathetic. For us, each person
            is special, who{" "}
            <span className="text-primaryColor">
              will learn, grow and thrive in their own space and time. We have
              decided to advocate for 'space and time'
            </span>{" "}
            of each individual learner. We can't make a dandelion bloom in a
            day. Why? Because it has its own time to grow. Why don't Dandelions
            grow on moon? Because moon isn't a safe and supportive space for
            them.
          </p>
          <div className="mt-8 bg-primaryColor w-1/2 h-[3px] mb-6"></div>
        </div>
        <div className=" justify-end flex basis-1/2 ">
          <Image width={"400px"} height={"400px"} src={circle}></Image>
        </div>
      </section>
      {/* empathySection */}
      <section className="section flex flex-col md:flex-row md:gap-8 md:py-16">
        <div className="md:basis-1/4 md:m-auto">
          <h1 className="text-3xl font-semibold">The Empathy Effect</h1>
          <div className="mt-6 bg-primaryColor w-1/4 h-[3px] mb-12"></div>
          <Link href={"#"}>
            <a className="bg-black text-white text-xl px-10 py-2 ">Read</a>
          </Link>
        </div>
        <p className="leading-8 text-xl my-8 self-center md:basis-1/2">
          Our story isn't a story of success. Our story is a story of struggle,
          survival and patience. Our story is a story of an unhazed dream and an
          unwavering faith to create a more learned and empathetic world!
        </p>
        <div className="m-auto md:basis-1/4">
          <Image height={"400px"} width={"400px"} src={empathyIcon}></Image>
        </div>
      </section>
      {/* storySection */}
      <EmpathySlider />
      {/* ssection thankyou */}
      <section className="section flex flex-col md:flex-row md:gap-8 md:py-16">
        <div className="m-auto mb-8 md:basis-1/4">
          <Image height={"400px"} width={"400px"} src={empathyIcon2}></Image>
        </div>
        <div className="md:basis-1/4 md:m-auto">
          <h1 className="text-4xl mb-4 font-semibold md:text-5xl md:font-bold lg:text-6xl">
            Thankyou
          </h1>
          <p className="text-3xl font-light md:text-4xl lg:text-5xl">
            for existing.
          </p>
        </div>
        <p className="leading-8 text-xl my-8 self-center md:basis-1/4 text-left">
          You have come so far, You have lived– with bravery and dignity.
          Whatever worries you, and whatever brings sadness to your face shall
          fade, with a new tale– Of love, kindness and empathy.
        </p>
      </section>
      <div className="w-screen h-8 bg-primaryColor"></div>
    </div>
  );
};

export default Empathy;
