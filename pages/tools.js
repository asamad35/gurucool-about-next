import Link from "next/link";
import Image from "next/image";

import toolsHero from "../public/tools-hero.png";
import mobile1 from "../public/mobile1.png";
import mobile2 from "../public/mobile2.png";
import mobile3 from "../public/mobile3.png";
import mobile4 from "../public/mobile4.png";
import mobile5 from "../public/mobile5.png";
import mobile6 from "../public/mobile6.png";
import toolCard4 from "../public/tool-card4.png";
import toolCard5 from "../public/tool-card5.png";
import toolCard6 from "../public/tool-card6.png";

import { Accordion } from "react-bootstrap";

const Tools = () => {
  return (
    <div>
      {/* heroSection */}
      <section className="section flex flex-col items-center gap-4 md:flex-row ">
        <div className="basis-2/3 ">
          <h1 className="text-3xl font-medium mb-1 sm:text-4xl md:text-5xl">
            Tools are made
          </h1>
          <h1 className="text-3xl font-medium mb-6 sm:text-4xl md:text-5xl md:mb-8">
            for the <span className="text-primaryColor"> people</span>.
          </h1>
          <p className="mb-4 text-xl md:text-2xl  max-w-xl">
            We are empowering educators like schools and colleges to go online
            and build their own digital infrastructure for learners to find,
            connect and learn from them.
          </p>
          <Link href="">
            <a className="text-primaryColor text-lg md:text-xl hover:text-inherit">
              Learn More
            </a>
          </Link>
        </div>
        <div className="basis-1/2 flex justify-center">
          <Image src={toolsHero}></Image>
        </div>
      </section>
      <div className=" section py-0 flex justify-between ">
        <h1 className="sm:text-xl">Learn</h1>
        <h1 className="sm:text-xl">Connect</h1>
        <h1 className="sm:text-xl">Teach</h1>
        <h1 className="sm:text-xl">Build</h1>
        <h1 className="sm:text-xl">See all products</h1>
      </div>

      {/* section learn1*/}
      <section className="section grid gap-8 md:grid-cols-3 ">
        <h1 className="text-3xl text-center font-semibold col-span-full mb-8 md:text-4xl">
          {" "}
          <span className="text-primaryColor ">Learn </span>in your own space
          and time
        </h1>
        {/* card */}
        <div className="flex flex-col items-center max-w-[780px]">
          <Image
            src="/for-all3.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Course</h2>
          <p className="text-slate-500 mt-6 text-center">
            Browse more than 3000+ courses that are open, innovative and
            awesome.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
          <Image src={mobile1} width="306px" height="454px"></Image>
        </div>

        <div className="flex flex-col items-center max-w-[780px]">
          <Image
            src="/for-all5.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Ask</h2>
          <p className="text-slate-500 mt-6 text-center">
            Assess your learners and get real-time feedback to enhance.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
          <Image src={mobile2} width="306px" height="454px"></Image>
        </div>

        <div className="flex flex-col items-center max-w-[780px]">
          <Image
            src="/for-all4.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Classroom</h2>
          <p className="text-slate-500 mt-6 text-center">
            Get access to free courses, study material, test series etc.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
          <Image src={mobile3} width="306px" height="454px"></Image>
        </div>
      </section>

      {/* sectionTuition1 */}
      <section className="section flex flex-col items-center gap-16 md:flex-row">
        <div className="flex flex-col items-center w-full basis-1/2 max-w-[780px] ">
          <Image
            src="/for-all3.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Tuition</h2>
          <p className="text-slate-500 mt-6 text-center">
            Create your tuition plan with suited recommendations & 0%
            commission.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
        </div>
        <div className="bg-[url('../public/tuition1.jpg')] w-full rounded-xl relative bg-cover overflow-hidden flex items-center">
          {/* <div className="w-full h-full absolute">
            <Image src={tuition1} objectFit="cover"></Image>
          </div> */}
          <div className="h-full w-full bg-black absolute opacity-60"></div>
          <div className="section py-[28%]">
            <h1 className="relative text-white text-xl sm:text-2xl mb-6 ">
              Create your tuition plan with suited recommendations & 0%
              commission.
            </h1>
            <Link href={"#"}>
              <a className="relative text-white text-lg">Learn More</a>
            </Link>
          </div>
        </div>
      </section>

      {/* section learn2 */}
      <section className="section grid gap-8 md:grid-cols-3 ">
        <h1 className="text-3xl text-center font-semibold col-span-full mb-8 md:text-4xl">
          {" "}
          <span className="text-primaryColor ">Learn </span>in your own space
          and time
        </h1>
        {/* card */}
        <div className="flex flex-col items-center max-w-[780px]">
          <Image
            src="/tool-card4.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Teach Pro</h2>
          <p className="text-slate-500 mt-6 text-center">
            Your own teaching platform.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
          <Image src={mobile4} width="306px" height="454px"></Image>
        </div>

        <div className="flex flex-col items-center max-w-[780px]">
          <Image
            src="/tool-card5.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Assessment</h2>
          <p className="text-slate-500 mt-6 text-center">
            Assess your learners and get real-time feedback to enhance.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
          <Image src={mobile5} width="306px" height="454px"></Image>
        </div>

        <div className="flex flex-col items-center max-w-[780px]">
          <Image
            src="/tool-card6.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Classroom</h2>
          <p className="text-slate-500 mt-6 text-center">
            Get access to free courses, study material, test series etc.
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
          <Image src={mobile6} width="306px" height="454px"></Image>
        </div>
      </section>

      {/* sectionTuition2 */}
      <section className="section flex flex-col items-center gap-16 md:flex-row">
        <div className="bg-[url('../public/tuition2.jpg')] w-full rounded-xl relative bg-cover overflow-hidden flex items-center">
          {/* <div className="w-full h-full absolute">
            <Image src={tuition1} objectFit="cover"></Image>
          </div> */}
          <div className="h-full w-full bg-black absolute opacity-60"></div>
          <div className="section py-[28%]">
            <h1 className="relative text-white text-xl sm:text-2xl mb-6 ">
              Educators are Creators are Influencers! Become a LEADer.
            </h1>
            <Link href={"#"}>
              <a className="relative text-white text-lg">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-full basis-1/2 max-w-[780px] ">
          <Image
            src="/for-all4.png"
            height="80px"
            width="80px"
            objectFit="contain"
          ></Image>
          <h2 className="text-2xl ">Engagement Plus</h2>
          <p className="text-slate-500 mt-6 text-center">
            Brand. Advertise. Monetise. Educators are influencers!
          </p>
          <div className="flex gap-8 my-12">
            <Link href="">
              <a className="text-primaryColor font-semibold">Get Started</a>
            </Link>
            <Link href="">
              <a className="text-primaryColor font-semibold">Support</a>
            </Link>
          </div>
        </div>
      </section>
      {/* Accordion section */}
      <section className="section pt-0">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>For All</Accordion.Header>
            <Accordion.Body>
              <div className="flex flex-wrap ">
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>For Learning</Accordion.Header>
            <Accordion.Body>
              <div className="flex flex-wrap ">
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>For Socializing</Accordion.Header>
            <Accordion.Body>
              <div className="flex flex-wrap  ">
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>{" "}
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard5} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Eduverse</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard4} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Padhaai</h1>
                </div>
                <div className="w-52 flex flex-col justify-center items-center">
                  <div className=" ">
                    <Image src={toolCard6} height="100px" width="100px"></Image>
                  </div>
                  <h1 className="text-center font-medium">Course</h1>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
};

export default Tools;
