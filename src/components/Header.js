import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
let minOffset = 0, maxOffset = 50
let thisYear = (new Date()).getFullYear();
let allYears = [];
for (let x = 0; x <= maxOffset; x++) {
  allYears.push(thisYear - x)
}

const yearList = allYears.map((x) => { return (<option key={x}>{x}</option>) });
const Header = () => {
  return (
    <div>
      <Navbar color="danger" light expand="md">
        <NavbarBrand href="/">Dashboard</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/"><h4>Company Name</h4></NavLink>
          </NavItem>

        </Nav>
        <NavbarText>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px" }}>ALL</div>
            <div style={{ padding: "10px" }}>Business</div>
            <div style={{ padding: "10px" }}>Add Hoc</div>
            {/* <AiOutlineUser></AiOutlineUser> */}
          </div>
        </NavbarText>

      </Navbar>
      <Navbar color="danger" light expand="md" style={{ borderBottomLeftRadius: "80px" }}>
        <NavbarText>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px" }}>ALL</div>
            <div style={{ padding: "10px" }}>REF</div>
            <div style={{ padding: "10px" }}>AC</div>
            <div style={{ padding: "10px" }}>WM</div>
            <div style={{ padding: "10px" }}>CE</div>
            <div style={{ padding: "10px" }}>WH</div>
            <div style={{ padding: "10px" }}>FLATFORM</div>
            {/* <AiOutlineUser></AiOutlineUser> */}
          </div>
        </NavbarText>

        <NavbarText>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "4px" }}>Year :</div>
            <div style={{ padding: "4px" }}> <select>
              {yearList}
            </select></div>
            {/* <AiOutlineUser></AiOutlineUser> */}
          </div>
        </NavbarText>

      </Navbar>
    </div>
  );
};
export default Header;