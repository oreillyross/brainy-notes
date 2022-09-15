import { Link, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useContext } from "react";

function Navigation() {
  const navigate = useNavigate();
  return <div className="mx-auto w-full max-w-md px-2 py-16 sm:px-0"></div>;
}

export default Navigation;
