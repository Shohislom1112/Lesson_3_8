import { Button, Dropdown, Navbar } from "flowbite-react";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = ({user}) => {
  const avatarUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <div className="w-full">
      <Navbar className="bg-gray-100">
        <div className="w-full flex justify-end">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={user.name}
            >
              <Dropdown.Item>
                <NavLink to="/profile">Profile</NavLink>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Nav.Link>
              <NavLink to="/login">
                <div>
                  <img src={avatarUrl} alt="" />
                  <Button>Выйти</Button>
                </div>
              </NavLink>
            </Nav.Link>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
