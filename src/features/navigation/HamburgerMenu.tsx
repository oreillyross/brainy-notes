import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/utils";
import { Menu } from "@headlessui/react";

function HamburgerMenu() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    Hamburger menu goes here
    </>
  );
}

export default HamburgerMenu;
