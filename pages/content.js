import Image from "next/image";
import Head from "next/head";

import LearnSlider from "./components/learnSlider";

import contentHero from "../public/content-hero.webp";
import downArrow from "../public/down-arrow.svg";
import contentCard1 from "../public/content-card-1.svg";
import contentCard2 from "../public/content-card-2.svg";
import contentCard3 from "../public/content-card-3.svg";

import learnCard1 from "../public/learn-card1.svg";
import learnCard2 from "../public/learn-card2.svg";
import learnCard3 from "../public/learn-card3.svg";
import learnCard4 from "../public/learn-card4.svg";
import learnCard5 from "../public/learn-card5.svg";

import { Card } from "react-bootstrap";

const Content = () => {
  return (
    <div className="overflow-x-hidden">
      {/* section hero */}
      <section className=" section grid relative items-center xs:grid-cols-1 xs:pb-24 xs:gap-y-8 md:h-screen md:grid-cols-3 md:gap-x-8 md:py-12">
        <h1 className="xs:text-4xl xs:font-medium sm:text-5xl">
          Content is the <br />{" "}
          <span className="text-primaryColor font-bold text-5xl sm:text-6xl">
            Queen.
          </span>
        </h1>
        <div className="contentHeroImg justify-self-center h-full w-full">
          <Image className="object-contain" src={contentHero}></Image>
        </div>
        <div>
          <p className="mb-4 text-lg md:text-xl">
            Creativity and psychosis often go hand in hand. Or, for that matter,
            genius and madness. Or, for that matter, creation and curation.
          </p>
          <button className="bg-primaryColor py-2 px-8 text-lg font-medium lg:px-12 lg:text-xl">
            Our Gambit
          </button>
        </div>
      </section>

      {/* section work */}
      <section className="section flex flex-col bg-primaryColor relative   ">
        <div className="bg-black w-fit flex  rounded-full p-3 justify-center items-center absolute top-0 left-1/2 -translate-x-2/4  -translate-y-2/4 ">
          <Image
            src={downArrow}
            className="rounded-full "
            height="60px"
            width="60px"
          ></Image>
        </div>
        <h1 className="text-center mb-12 font-medium xs:text-2xl xs:pt-8 sm:text-3xl sm:pt-0 md:text-4xl  ">
          Why Guru<span className="text-white">cool</span> works
        </h1>
        <div className=" flex flex-col justify-between items-center gap-8 md:flex-row  ">
          <Card className="bg-primaryColor border-none flex flex-col items-center justify-center md:w-80">
            <Image height="120px" width="120px" src={contentCard1}></Image>
            <Card.Body>
              <Card.Title className="text-center mb-4 text-2xl">
                Accessible
              </Card.Title>
              <Card.Text className="text-center md:text-lg">
                Almost all the great tools and content pools that Gurucool makes
                are available to all the learners and educators.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-primaryColor border-none flex flex-col items-center justify-center md:w-80">
            <Image height="120px" width="120px" src={contentCard2}></Image>
            <Card.Body>
              <Card.Title className="text-center mb-4 text-2xl">
                Accessible
              </Card.Title>
              <Card.Text className="text-center md:text-lg">
                The best content from the best of open sources and educators in
                the world are aggregated and curated on Gurucool.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-primaryColor  border-none flex flex-col items-center justify-center md:w-80">
            <Image height="120px" width="120px" src={contentCard3}></Image>
            <Card.Body>
              <Card.Title className="text-center mb-4 text-2xl">
                Accessible
              </Card.Title>
              <Card.Text className="text-center md:text-lg">
                With more than 20+ regional and international languages,
                Gurucool is making hyperlocal education possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* section learnSmart */}
      <section className="section flex flex-col gap-8 items-center sm:flex-row sm:justify-between">
        <div className="contentLearnSlider">
          <LearnSlider />
        </div>
        <h1 className="text-4xl font-medium mt-8 xs:align-self-start sm:align-self-center sm:text-5xl lg:pr-72 lg:text-6xl ">
          Learning is <br />
          <span className="text-primaryColor font-bold text-4xl  sm:text-6xl lg:text-7xl">
            {" "}
            Fun.{" "}
          </span>
        </h1>
      </section>

      {/* Section learning */}
      <section className="section">
        <div className=" mx-auto">
          <div className="lg:flex -mx-6 items-center">
            <div className="lg:w-1/2 px-6 w-full lg:mb-4 mb-6">
              <div className="">
                <h2 className="md:text-5xl text-3xl font-bold lg:leading-tight mb-4">
                  Start learning with Gurucool
                </h2>
                <p className="text-xl text-slate-900 font-normal mb-4">
                  Get unlimited access to structured courses &amp; doubt
                  clearing sessions
                </p>
                <a
                  href="#"
                  className="inline-block px-9 py-4 bg-primaryColor rounded tracking-wide text-xl"
                >
                  Start learning
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 px-6 w-full">
              <div className="md:flex -mx-6 flex-wrap">
                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow relative p-4 mb-4">
                    <div className="text-lg text-slate-600">
                      Cool categories
                    </div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      100 <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute bottom-0 right-0">
                      <Image src={learnCard1} alt="" width={284} height={180} />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow relative p-4 mt-6 mb-4">
                    <div className="text-lg text-slate-600">Campus</div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      5k <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute bottom-0 right-0">
                      <Image src={learnCard2} alt="" width={284} height={180} />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow relative p-4 lg:-mt-4">
                    <div className="text-lg text-slate-600">
                      Daily live classes
                    </div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      1.5k <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute bottom-0 right-0">
                      <Image src={learnCard3} alt="" width={284} height={180} />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-6 w-full mt-4">
                  <div className="bg-white shadow relative p-4">
                    <div className="text-lg text-slate-600">Video lessons</div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      1M <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute bottom-0 right-0">
                      <Image src={learnCard4} alt="" width={284} height={180} />
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow relative p-4 mt-4 lg:-mt-4">
                    <div className="text-lg text-slate-600">Community</div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      300k <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute bottom-0 right-0">
                      <Image src={learnCard5} alt="" width={284} height={180} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Guru */}
      <section className="section">
        <div className="bg-[url('../public/become-teacher.jpg')] bg-cover rounded-[3rem] h-[32rem] flex flex-col items-start justify-center px-12  ">
          <h1 className="text-white text-3xl font-bold mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            You can become a Guru <br /> Creator too!
          </h1>
          <p className="text-white mb-6 md:text-xl">
            Share tour knowledge, live off passion and be your own boss
          </p>
          <a
            href="#"
            className="inline-block px-9 py-2 bg-primaryColor rounded tracking-wide text-xl text-center font-medium"
          >
            Find out more
          </a>
        </div>
      </section>
      {/* sharing */}
      <section className="section bg-primaryColor flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl mb-8 sm:text-5xl ">
          Sharing is caring.
        </h1>
        <p className="text-center mb-6 text-xl lg:px-28 lg:text-2xl">
          We encourage learners to engage in meaningful conversations and
          educators to share their knowledge freely and for free.
        </p>
        <a
          href="#"
          className=" px-6 py-2 bg-black flex m-auto justify-center text-white rounded tracking-wide text-xl text-center font-medium"
        >
          Find out more
        </a>
      </section>
    </div>
  );
};

export default Content;
