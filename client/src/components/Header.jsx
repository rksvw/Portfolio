import { Navbar, TextInput, Dropdown, Avatar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar className="flex justify-between items-center border-b fixed top-0 left-0 w-full z-10">
      {/* left */}
      <div className="flex">
        <Link to={"/"}>
          <span className="px-2 py-1 bg-gradient-to-tr from-lime-400 via-indigo-700 to-rose-300 rounded-lg text-white">
            Wratsout
          </span>
        </Link>
      </div>
      {/* middle */}
      <div className="flex">
        <form className="w-96">
          <TextInput
            className="border-gray-300 focus:border-indigo-500 rounded-lg px-4 py-2"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
          />
        </form>
      </div>
      {/* left */}

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
      <Navbar.Toggle />
      {currentUser ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="user" img={currentUser.profilePicture} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">@{currentUser.username}</span>
            <span className="block text-sm font-medium truncate">
              {currentUser.email}
            </span>
          </Dropdown.Header>
          <Link to={"/dashboard?tab=profile"}>
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item>Sign Out</Dropdown.Item>
        </Dropdown>
      ) : (
        <Link to={"/sign-in"}>
          <Button gradientDuoTone={"purpleToBlue"} outline>
            Sign In
          </Button>
        </Link>
      )}
    </Navbar>
  );
}

export default Header;
