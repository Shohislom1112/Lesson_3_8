import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Nav } from "react-bootstrap";
// import { CgProfile } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';

const Header = ({user}) => {
  const isLoggedIn = true;
  const avatarUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <div className="w-full">
      <Navbar className="bg-gray-100">
        <div className="w-full flex justify-end">
        {user ? (
              <Nav.Link>
                <NavLink to="/profile"><div className="loginn">
                {user.name}
                </div></NavLink>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <NavLink  to="/login"><div >
                <img src={avatarUrl} alt="" />
                  <p className="">Выйти</p>
                </div></NavLink>
              </Nav.Link>
            )}

          {/* {isLoggedIn ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={avatarUrl} rounded />}
            >
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="login">
              <Button gradientDuoTone="purpleToBlue" outline>
                Login
              </Button>
            </Link>
          )} */}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
