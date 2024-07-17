import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2 border-black bg-[rgba(42,42,42,0.9)]">
      <div className="w-[10%] flex items-center justify-start">
        <Link
          to="/"
          className="self-center text-sm font-semibold md:text-xl whitespace-nowrap"
        >
          <span className="px-2 py-1 bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg text-white">
            Egist
          </span>
          folio
        </Link>
      </div>
      <form className="w-[34%] flex justify-start items-center">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline w-96 text-[#4f4f4f] font-semibold"
        />
      </form>
      <div className="flex justify-between items-center w-[30%]">
        <Navbar.Collapse>
          <Navbar.Link action={path === "/"} as={"div"}>
            <Link to="/" className="text-stone-200">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link action={path === "/about"} as={"div"}>
            <Link to="/about" className="text-stone-200">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link action={path === "/projects"} as={"div"}>
            <Link to="/filter" className="text-stone-200">
              Filter
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="sign-in">
            <Button gradientDuoTone={"purpleToBlue"}>Sign In</Button>
          </Link>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
