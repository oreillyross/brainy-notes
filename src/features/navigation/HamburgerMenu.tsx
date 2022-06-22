function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (e: any) => {
    console.log("Clicked");
    setIsOpen((isOpen) => !isOpen);
  };
  if (!isOpen) {
    return (
      <div className="flex flex-col justify-center pr-8 ">
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
            <div className="transition duration-200 ease-in-out pt-2 bg-slate-900 h-2 w-12 mt-2 rotate-45"></div>
            <div className=" transition duration-200 ease-in-out -translate-y-[14px] bg-slate-900 h-2 w-12 mt-2 -rotate-45"></div>
          </button>
        </div>
        <div className="absolute top-10 right-28 bg-slate-800 w-32 h-64">
          <ul className="text-2xl p-2 text-white font-semibold hover:underline">
            <a href="/notes">Notes</a>
          </ul>
          <ul className="text-2xl p-2 text-white font-semibold hover:underline">
            <a href="/">Settings</a>
          </ul>
          <ul className="text-2xl p-2 text-white font-semibold hover:underline">
            <a href="/">About</a>
          </ul>
          <ul className="text-2xl p-2 text-white font-semibold hover:underline">
            <a href="/">Log In</a>
          </ul>
        </div>
      </>
    );
  }
}

export default HamburgerMenu;
