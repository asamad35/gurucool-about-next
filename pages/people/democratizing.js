import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Democratizing = () => {
  return (
    <div>
      {/* sectionHero */}
      <section className="section flex flex-col h-[100vh] items-start justify-center gap-8 ">
        <h1 className="text-3xl mb-2 font-medium max-w-[746px] sm:text-4xl md:text-5xl">
          Gurucool is an eduverse in which informed learners choose their
          favorite educators.
        </h1>
        <Link href="/">
          <a className="bg-black text-white text-xl text-center py-3 px-8 ">
            Go to GuruCool.xyz
          </a>
        </Link>
      </section>
      {/* sectionGrid */}
      <section className="section px-0 grid grid-cols-1 gap-y-8 md:grid-cols-3 items-center">
        <div className="bg-[url('../public/democratizing-1.jpg')] bg-cover flex justify-center h-fit ">
          <div className="bg-white mx-4 my-28 p-8 w-[90%]">
            <span className="text-primaryColor text-3xl font-semibold md:text-4xl">
              Accessible
            </span>
            <h1 className="font-bold text-3xl my-4  max-w-md  md:text-4xl ">
              Education is not a luxury, it's a necessity
            </h1>
            <span className="font-light text-sm text-slate-600">
              10:30 AM Jan, 2020
            </span>
          </div>
        </div>
        <div className="bg-[url('../public/democratizing-2.jpg')] bg-cover flex justify-center h-fit ">
          <div className="bg-white mx-4 my-28 p-8 w-[90%]">
            <span className="text-primaryColor  text-3xl font-semibold  md:text-5xl md:">
              Quality
            </span>
            <h1 className="font-bold text-3xl my-4 max-w-md md:text-5xl">
              We are all worthy of choices, and good choices.
            </h1>
            <span className="font-light text-sm text-slate-600">
              10:30 AM Jan 29, 2020
            </span>
          </div>
        </div>
        <div className="bg-[url('../public/democratizing-3.jpg')] bg-cover flex justify-center h-fit ">
          <div className="bg-white mx-4 my-28 p-8 w-[90%]">
            <span className="text-primaryColor text-3xl font-semibold md:text-4xl">
              Hyperlocal
            </span>
            <h1 className="font-bold text-3xl my-4 max-w-md md:text-4xl ">
              Let's be vocal for hyperlocal.
            </h1>
            <span className="font-light text-sm text-slate-600">
              10:30 AM Jan, 2020
            </span>
          </div>
        </div>
      </section>
      {/* People Section */}
      <section className="section">
        <h1 className="text-3xl font-medium sm:text-4xl md:text-5xl mb-4">
          Of the People,
        </h1>
        <h1 className="text-3xl font-medium sm:text-4xl md:text-5xl mb-4">
          By the People,
        </h1>
        <h1 className="text-3xl font-medium sm:text-4xl md:text-5xl mb-4">
          For the People.
        </h1>
        <p className="text-xl mb-8">
          That’s why it matters to us that people have a free and safe space to
          talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-x-8 ">
          <Link href="#">
            <a className="w-fit flex gap-2 hover:text-inherit font-bold">
              Right to education{" "}
              <FontAwesomeIcon
                className="text-primaryColor w-6"
                icon={faArrowRight}
              />{" "}
            </a>
          </Link>
          <Link href="#">
            <a className="w-fit flex gap-2 hover:text-inherit font-bold">
              Freedom to choose
              <FontAwesomeIcon
                className="text-primaryColor w-6"
                icon={faArrowRight}
              />{" "}
            </a>
          </Link>
        </div>
      </section>
      <section className="section bg-[#bfa78c] ">
        <h2 className="text-[#fee25d] text-2xl md:text-4xl">
          The magic of Clubhouse <br /> is witnessing the most
        </h2>
        <h1 className="text-[#fee25d] text-4xl font-bold mb-4 pl-20 pt-8  sm:text-7xl md:text-7xl lg:text-9xl">
          Unlikely
        </h1>
        <h1 className="text-[#fee25d] text-4xl font-bold pl-32 sm:text-7xl md:text-7xl lg:text-9xl ">
          Collisions
        </h1>
        <h2 className="text-[#fee25d] text-2xl md:text-4xl text-right">
          of people
        </h2>
      </section>
    </div>
  );
};

export default Democratizing;
