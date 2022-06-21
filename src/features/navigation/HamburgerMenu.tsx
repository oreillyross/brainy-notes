function HamburgerMenu() {
  return (
    <div>
      {/* Hamburger menu */}
      <label
        htmlFor="hamburger-check"
        className="w-12 h-12 block box-border border-0 p-0 m-5"
      >
        <div className="h-2 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
        <div className="h-1 bg-gradient-to-b from-white-500 to-white-500"></div>
        <div className="h-2 bg-gradient-to-b from-violet-500 to-blue-500"></div>
        <div className="h-1 bg-gradient-to-b from-white-500 to-white-500"></div>
        <div className="h-2 bg-gradient-to-b from-purple-500 to-pink-500"></div>
        {/* Sidebar menu */}
        <input type="checkbox" id="hamburger-check" className="peer" />
        <nav
          id="hamburger-menu"
          className="peer-checked:bg-green-500 left-64 fixed t-0 w-48 h-full bg-purple-500 px-2 box-border "
        >
          <ul>
            <li>
              <a href="/home">Home</a>
              <a href="/notes">Notes</a>
              <a href="/about">About</a>
              <a href="/login">Login/Logout</a>
            </li>
          </ul>
        </nav>
      </label>
      {/* Overlay */}
      <div></div>
    </div>
  );
}

export default HamburgerMenu;
