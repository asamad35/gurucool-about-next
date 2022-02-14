import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import PeopleSlider from "../components/peopleSlider";
import DesignationSlider from "../components/designationSlider";
import team from "../../public/team.png";

import groupPhoto from "../../public/padhaai-initiative-3.webp";
import person1 from "../../public/person-1.webp";
import person2 from "../../public/person-2.webp";
import person3 from "../../public/person-3.webp";
import person4 from "../../public/person-4.webp";
import person5 from "../../public/person-5.webp";
import person6 from "../../public/person-6.jpg";

const People = () => {
  return (
    <div>
      {/* HeroSection */}
      <section className=" ">
        <PeopleSlider />
      </section>
      {/* Gurufam */}
      <section className="section gurufam">
        <h1 className="text-center text-4xl font-bold mb-16 md:text-5xl">
          #<span className="text-primaryColor">Guru</span>Fam
        </h1>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-14 lg:gap-32">
          <div className="max-w-[500px]">
            <Image src={team}></Image>
          </div>
          <div>
            <h1 className="text-2xl font-medium my-8 lg:text-3xl">
              We feel so proud to see #GuruFam community learning, growing and
              thriving continually.
            </h1>
            <p className="text-xl lg:text-2xl">
              Our story isn't a story of success. Our story is a story of
              struggle, survival and patience. Our story is a story of an
              unhazed dream and an unwavering faith to create a more learned and
              empathetic world!
            </p>
          </div>
        </div>
      </section>

      {/* DesignationSection */}
      <div className="section">
        <DesignationSlider />
      </div>
      {/* global team */}
      <section className="section grid justify-items-center xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_2fr_2fr_2fr] gap-8">
        <h1 className="text-4xl font-medium md:col-span-full md:justify-self-start lg:col-auto">
          <span className="text-primaryColor">great minds</span> from all over
          the globe
        </h1>
        <div className="flex flex-col">
          <div className="sm:w-[334px] md:w-auto">
            <div>
              <Image
                src={person6}
                objectFit="contain"
                objectPosition="top"
                width="334px"
                height="500px"
              ></Image>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Parvez Jasani</h1>
                <FontAwesomeIcon icon={faLinkedin} className="w-8" />
              </div>
              <p className="text-lg font-light"> CEO,</p>
              <p className="text-lg font-light"> Zulie Ventures Inc.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="sm:w-[334px] md:w-auto">
            <div>
              <Image
                src={person4}
                objectFit="contain"
                objectPosition="top"
                width="334px"
                height="500px"
              ></Image>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Aaquib Hussain</h1>
                <FontAwesomeIcon icon={faLinkedin} className="w-8" />
              </div>
              <p className="text-lg font-light"> Founding Partner,</p>
              <p className="text-lg font-light"> FreeFlow Venture Builders</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="sm:w-[334px] md:w-auto">
            <div>
              <Image
                objectFit="contain"
                objectPosition="top"
                width="334px"
                height="500px"
                src={person1}
              ></Image>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Asif Iqbal</h1>
                <FontAwesomeIcon icon={faLinkedin} className="w-8" />
              </div>
              <p className="text-lg font-light"> Founder,</p>
              <p className="text-lg font-light"> Let's Scale Up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join GuruFam */}
      <section className="section">
        <h1 className="text-6xl font-semibold mb-2">Join the</h1>
        <span className="text-6xl font-semibold text-primaryColor">Fam!</span>
        <div className="grid xs:grid-cols-1 mt-8 lg:grid-cols-2 gap-8">
          <div>
            <Image src={groupPhoto}></Image>
          </div>

          <div>
            <p className="text-xl my-4 mb-8 lg:text-2xl lg:mt-0">
              We have welcomed wholeheartedly anyone who believes in our values
              and vision and wants to work for the same. GuruFam is a mess. But
              it is your mess, it is our mess. It is a cool mess! Make mistakes
              within GuruFam and learn from them.
            </p>
            <div className="grid xs:grid-cols-1 gap-8 border-b-2 border-solid border-black pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
              <Link href="#">
                <a className="text-center bg-black text-white px-8 py-2 text-lg w-40 m-auto">
                  Workshop
                </a>
              </Link>
              <Link href="#">
                <a className="text-center bg-black text-white px-8 py-2 text-lg w-40 m-auto">
                  Podcast
                </a>
              </Link>
              <Link href="#">
                <a className="text-center bg-black text-white px-8 py-2 text-lg w-40 m-auto">
                  Articles
                </a>
              </Link>
              <Link href="#">
                <a className="text-center bg-black text-white px-8 py-2 text-lg w-40 m-auto">
                  Impact
                </a>
              </Link>
              <Link href="#">
                <a className="text-center bg-black text-white px-8 py-2 text-lg w-40 m-auto">
                  Guruship
                </a>
              </Link>
              <Link href="#">
                <a className="text-center bg-black text-white px-8 py-2 text-lg w-40 m-auto">
                  Connect
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;
