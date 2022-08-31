import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/utils";
import { Menu } from "@headlessui/react";

function HamburgerMenu() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menu>
        <Menu.Button>Open/close</Menu.Button>
        <Menu.Items>
          {({ open }) => (
            <Menu.Item>
              {({ active }) => 
                active ? (
                      <a className="text-red-200">Hello</a>     
                ) : (

                      <a className="text-blue-200">Hello</a>     
                )
              }
            </Menu.Item>
          )}
        </Menu.Items>
      </Menu>
    </>
  );
}

export default HamburgerMenu;
