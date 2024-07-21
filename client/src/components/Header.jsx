import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="flex justify-between items-center border-b fixed top-0 left-0 w-full z-10">
      {/* left */}
      <div className="flex">
        <Link to={"/"}>
          <span className="px-2 py-1 bg-gradient-to-tr from-lime-400 via-indigo-700 to-rose-300 rounded-lg text-white">
            Cyrotik
          </span>
        </Link>
      </div>
      {/* middle */}

      <div className="flex gap-4 justify-center items-center">
        <Navbar.Collapse>
          <Navbar.Link action={path === "/"} as={"div"}>
            <Link to={"/"}>Recent</Link>
          </Navbar.Link>
          <Navbar.Link action={path === "/anime"} as={"div"}>
            <Link to={"/anime"}>Anime</Link>
          </Navbar.Link>
          <Navbar.Link action={path === "/about"} as={"div"}>
            <Link to={"/about"}>About</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
      {/* right */}
      <div className="flex">
        <form className="w-96">
          <TextInput
            className="border-gray-300 focus:border-indigo-500 rounded-lg px-4 py-2"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
          />
        </form>
      </div>
      <Navbar.Toggle />
    </Navbar>
  );
}

export default Header;
