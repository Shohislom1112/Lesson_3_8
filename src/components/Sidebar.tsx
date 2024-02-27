import { Avatar, Sidebar } from "flowbite-react";
import { VscColorMode } from "react-icons/vsc";
import { ImUsers } from "react-icons/im";

import { HiChartPie, HiArrowSmLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { student, teacher } from "../assets/images";

function MySidebar() {
  return (
    <Sidebar className="w-52 rounded-none">
      <Sidebar.Items className="rounded-none">
        <Sidebar.ItemGroup
          className="h-full px-0 py-0  "
          style={{ height: "31rem" }}
        >
          <NavLink to="/">
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
          </NavLink>

          <NavLink to="/teachers" >
            {/* <img src={teacher} alt="" /> */}
          
           {/* <Avatar alt="User settings" img={teacher} rounded /> */}
            <Sidebar.Item>Teachers</Sidebar.Item> 
        
          </NavLink>
          <NavLink to="/students">
            {/* <img src={student} alt="" /> */}
            {/* <Avatar alt="User settings" img={student} rounded /> */}
            <Sidebar.Item>Students</Sidebar.Item>
          </NavLink>

          <NavLink to="/login">
            <Sidebar.Item icon={HiArrowSmLeft}>Logout</Sidebar.Item>
          </NavLink>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default MySidebar;
