
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Fragment } from "react";

export function NavBar() {
  return (
    <Navbar fluid rounded className="bg-[#293143] text-white flex justify-center">
        <Fragment>
      <NavbarBrand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Live Coin Watch</span>
      </NavbarBrand>
      </Fragment>
    </Navbar>
  );
}
 