import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const MyNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="p-0">
          <Link href="/">
            <Navbar.Brand className="md:mr-24 cursor-pointer ">
              <Image
                src="/logo.png"
                width="150px"
                height="50px"
                objectFit="contain"
              ></Image>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="mr-4"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <a className="text-xl font-medium mr-16 hover:text-primaryColor mb-2 ml-4">
                  {" "}
                  Our Story{" "}
                </a>
              </Link>
              <Link href="people">
                <a className="text-xl font-medium mr-16 hover:text-primaryColor mb-2 ml-4 ">
                  People
                </a>
              </Link>
              <Link href="tools">
                <a className="text-xl font-medium mr-16 hover:text-primaryColor mb-2 ml-4 ">
                  Tools
                </a>
              </Link>
              <Link href="content">
                <a className="text-xl font-medium mr-16 hover:text-primaryColor mb-2 ml-4 ">
                  Content
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
