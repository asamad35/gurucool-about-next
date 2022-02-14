import styles from "../styles/index.module.scss";
import Image from "next/image";
import tortoise from "../public/two_roads.gif";
import network from "../public/social-image.png";
import Head from "next/head";

import HomeSlider from "./components/homeSlider";

import company2 from "../public/company-2.png";
import company3 from "../public/company-3.png";
import company4 from "../public/company-4.svg";
import company5 from "../public/company-5.webp";
import company6 from "../public/company-6.jpg";
import company7 from "../public/company-7.png";
import company8 from "../public/company-8.png";
import company9 from "../public/company-9.png";
import history from "../public/history.png";

import post1 from "../public/post1.webp";
import post2 from "../public/post2.webp";
import post3 from "../public/post3.webp";
import post4 from "../public/post4.webp";
import post5 from "../public/post5.webp";
import post6 from "../public/post6.webp";
1;
export default function Home() {
  return (
    <div className="index">
      {/* section hero */}
      <section
        className={` section flex justify-center items-center h-screen max-w-6xl mx-auto `}
      >
        <h1 className="font-medium text-center xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl md:px-24">
          Our vision is to{" "}
          <span className="text-primaryColor">personalize</span> the world’s
          education and make it{" "}
          <span className="text-primaryColor">universally accessible</span> and{" "}
          <span className="text-primaryColor">empathetic</span>.
        </h1>
      </section>

      {/* section tortoise */}
      <section
        className={`${styles.tortoise} section flex justify-center items-center max-w-6xl mx-auto`}
      >
        <div className="shadow-2xl rounded-3xl overflow-hidden flex justify-center items-center">
          <Image src={tortoise}></Image>
        </div>
      </section>

      {/* section network */}
      <section
        className={`${styles.network} section max-w-full bg-primaryColor `}
      >
        <Image src={network}></Image>

        <div className="flex bg-primaryColor max-w-full m-auto md:px-12 md:flex-row md:justify-between md:items-center  border-slate-200 border-y-2 py-12 xs:flex-col xs:items-start xs:gap-4 xs:px-4 ">
          <h2 className="text-xl font-medium">
            Gurucool offers a suite of phygital tools to connect learners and
            educators in an eduverse.
          </h2>
          <button className="px-12 py-3 ml-4 bg-black text-white text-lg xs:ml-0">
            Explore
          </button>
        </div>
      </section>
      {/* section.journey */}
      <section
        className={`${styles.journey} section bg-[url('../public/hero-banner.jpg')] bg-cover h-screen relative overflow-hidden `}
      >
        <div className="h-screen w-screen absolute top-0 left-0 bg-black opacity-60 "></div>
        <h1 className="text-primaryColor sm:text-6xl font-bold relative xs:text-4xl xs:translate-y-12 xs:text-center">
          Our Journey
        </h1>
        <HomeSlider />
      </section>
      {/* section news */}
      <section className={`${styles.news} section `}>
        <h1 className="text-center xs:text-4xl xs:font-medium xs:mb-2 md:mb-8 md:text-5xl">
          In the news
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-12">
          <Image
            src={company2}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
          <Image
            src={company3}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
          <Image
            src={company4}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
          <Image
            src={company5}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
          <Image
            src={company7}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
          <Image
            src={company6}
            height="120px"
            width="120px"
            className={`${styles.newsPic} object-contain`}
          ></Image>
          <Image
            src={company8}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
          <Image
            src={company9}
            height="120px"
            width="120px"
            className="object-contain"
          ></Image>
        </div>
      </section>

      {/* section posts */}
      <section
        className={`${styles.posts} section grid justify-items-center items-start gap-y-12 lg:grid-cols-2 pt-[0]  `}
      >
        <div className={`${styles.post} mx-8 max-w-[30rem]`}>
          <h1 className="mb-4 sm:text-2xl xs:text-xl ">
            <span
              className={`${styles.postSpan} px-2 rounded-md text-sm border-[1px] border-gray-400 border-solid`}
            >
              BW BUSINESSWORLD
            </span>{" "}
            Gurucool Secures Pre-Seed Funding Of $1,50,000
          </h1>
          <div className={`rounded-lg overflow-hidden mb-2 flex`}>
            <Image src={post1}></Image>
          </div>
          <p className="text-center text-slate-500 text-sm ">1 Minute Read</p>
        </div>
        <div className={`${styles.post} mx-8 max-w-[30rem]`}>
          <h1 className="mb-4 sm:text-2xl xs:text-xl ">
            <span
              className={`${styles.postSpan} px-2 rounded-md text-sm border-[1px] border-gray-400 border-solid`}
            >
              ENTRACKR Gurucool
            </span>{" "}
            scoops up $150k pre-seed funding
          </h1>
          <div className={`rounded-lg overflow-hidden mb-2 flex`}>
            <Image src={post2}></Image>
          </div>
          <p className="text-center text-slate-500 text-sm ">1 Minute Read</p>
        </div>
        <div className={`${styles.post} mx-8 max-w-[30rem]`}>
          <h1 className="mb-4 sm:text-2xl xs:text-xl ">
            <span
              className={`${styles.postSpan} px-2 rounded-md text-sm border-[1px] border-gray-400 border-solid`}
            >
              STARTUPPEDIA
            </span>{" "}
            Startuppedia announces Brand Partnership with Gurucool
          </h1>
          <div className={`rounded-lg overflow-hidden mb-2 flex`}>
            <Image src={post3}></Image>
          </div>
          <p className="text-center text-slate-500 text-sm ">1 Minute Read</p>
        </div>
        <div className={`${styles.post} mx-8 max-w-[30rem]`}>
          <h1 className="mb-4 sm:text-2xl xs:text-xl ">
            <span
              className={`${styles.postSpan} px-2 rounded-md text-sm border-[1px] border-gray-400 border-solid`}
            >
              ANNOUNCEMENT
            </span>{" "}
            Re-emergence: Gurucool opens its first 'India's Next Gen Coaching
            Classes' since the pandemic
          </h1>
          <div className={`rounded-lg overflow-hidden mb-2 flex`}>
            <Image src={post4}></Image>
          </div>
          <p className="text-center text-slate-500 text-sm ">1 Minute Read</p>
        </div>
        <div className={`${styles.post} mx-8 max-w-[30rem]`}>
          <h1 className="mb-4 sm:text-2xl xs:text-xl ">
            <span
              className={`${styles.postSpan} px-2 rounded-md text-sm border-[1px] border-gray-400 border-solid`}
            >
              BUCKETBUFF
            </span>{" "}
            How Gurucool's 'Padhaai' is making quality education free and
            hyperlocal in India
          </h1>
          <div className={`rounded-lg overflow-hidden mb-2 flex`}>
            <Image src={post5}></Image>
          </div>
          <p className="text-center text-slate-500 text-sm ">1 Minute Read</p>
        </div>
        <div className={`${styles.post} mx-8 max-w-[30rem]`}>
          <h1 className="mb-4 sm:text-2xl xs:text-xl ">
            <span
              className={`${styles.postSpan} px-2 rounded-md text-sm border-[1px] border-gray-400 border-solid`}
            >
              AWARESHALA
            </span>{" "}
            Gurucool – From Café with Love
          </h1>
          <div className={`rounded-lg overflow-hidden mb-2 flex`}>
            <Image src={post6}></Image>
          </div>
          <p className="text-center text-slate-500 text-sm ">1 Minute Read</p>
        </div>
      </section>
      {/* section history */}
      <section
        className={`${styles.history} max-w-[70rem] section flex flex-col justify-center items-center`}
      >
        <h1 className="text-center mb-8 font-medium xs:text-3xl sm:text-4xl ">
          Today in Gurucool history
        </h1>
        <p className="text-center font-normal mb-4  xs:text-xl sm:text-2xl ">
          November 23, 2021
        </p>
        <p className="text-center font-light mb-8  xs:text-xl sm:text-3xl ">
          Shaheen Shifa's 8th birthday
        </p>
        <Image src={history} className={styles.history}></Image>
      </section>
    </div>
  );
}
