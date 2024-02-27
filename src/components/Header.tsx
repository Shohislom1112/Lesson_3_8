import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { MainLogo,  tom } from "../assets/images/index";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <Navbar fluid className="bg-gray-100">
      <Navbar.Brand>
        <img src={MainLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        {/* <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white"> */}
          {/* Admin Panel
        </span> */}
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <span className="block text-2xl mr-2">Tom Holand</span>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={tom}
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">
              Email: tomholand@gmail.com
            </span>
            <span className="block truncate text-sm font-medium">
              Password: ******
            </span>
          </Dropdown.Header>
          <NavLink to="/profile">
            <Dropdown.Item>Profile</Dropdown.Item>
          </NavLink>

          <Dropdown.Divider />
          <NavLink to="/login">
            <Dropdown.Item>Log In</Dropdown.Item>
          </NavLink>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Header;

// Sign in or image in 1:17:07
