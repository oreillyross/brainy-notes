import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (e: any) => {
    console.log("Clicked");
    setIsOpen((isOpen) => !isOpen);
  };
  if (!isOpen) {
    return (
      <div className="flex flex-col justify-center pr-8">
        <button onClick={openMenu}>
          <div className="bg-slate-900 h-2 w-12 mt-2"></div>
          <div className="bg-slate-900 h-2 w-12 mt-2"></div>
          <div className="bg-slate-900 h-2 w-12 mt-2"></div>
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col justify-center pr-8">
          <button onClick={openMenu}>
            <div className="bg-slate-900 h-2 w-12 mt-2"></div>
          </button>
        </div>
        <div>
          <ul>Notes</ul>
          <ul>Settings</ul>
          <ul>About</ul>
          <ul>Log In</ul>
        </div>
      </>
    );
  }
}

export default HamburgerMenu;
