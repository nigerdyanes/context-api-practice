import React from "react";
import Logo from "./Logo";
import { CNav, CNavItem, CNavLink } from "@coreui/react";

const Navbar = () => {
  return (
    <>
      <CNav className="justify-content-center">
        <CNavItem>
          <CNavLink href="#">
            <Logo />
          </CNavLink>
        </CNavItem>
      </CNav>
    </>
  );
};

export default Navbar;
