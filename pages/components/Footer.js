import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-black py-6 footer">
        <div className="container mx-auto">
          <div className="lg:flex justify-between items-center border-b pb-3 mb-12">
            <div className="lg:w-1/2 px-6">
              <ul className="flex">
                <li className="mr-3 text-white">Follow us</li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="#"
                    className="text-primaryColor text-xl"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="#"
                    className="text-primaryColor text-xl"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="#"
                    className="text-primaryColor text-xl"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="#"
                    className="text-primaryColor text-xl"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="#"
                    className="text-primaryColor text-xl"
                  >
                    <i className="fab fa-quora"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 px-6 lg:text-right">
              <ul className="flex lg:justify-end items-center lg:mt-0 mt-6">
                <li className="mr-3">
                  <a href="#" className="text-primaryColor text-xl">
                    <i className="fas fa-globe"></i>
                  </a>
                </li>
                <li className="">
                  <select className="py-2 px-4 rounded">
                    <option>English</option>
                    <option>हिंदी</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/3 px-6 md:mb-0 mb-6">
              <h4 className="fw-medium text-primaryColor text-xl mb-3">
                <span>More about us</span>{" "}
                <i className="fas fa-chevron-down block md:hidden"></i>
              </h4>
              <ul className="footerLink">
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Supporters
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Sail with Guruship
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 px-6 md:mb-0 mb-6">
              <h4 className="fw-medium text-primaryColor text-xl mb-3">
                <span>Help Center</span>{" "}
                <i className="fas fa-chevron-down block md:hidden"></i>
              </h4>
              <ul className="footerLink">
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Gurucool.xyz
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Padhaai
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Gurucool Coaching
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Home Tuition
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 px-6">
              <h4 className="fw-medium text-primaryColor text-xl mb-3">
                <span>Policy</span>{" "}
                <i className="fas fa-chevron-down block md:hidden"></i>
              </h4>
              <ul className="footerLink">
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Data Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Community Standards
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    How our Business Works
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 mt-9">
            <ul>
              <li className="inline-block align-middle">
                <a href="#" className="px-3 block">
                  <Image src="/logo.png" alt="" width={120} height={35} />
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white px-2">
                  <i className="fas fa-question-circle"></i> Help
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white px-2">
                  Privacy
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white px-2">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
