import { logout } from "../auth/utils";

function HamburgerMenu() {
  return (
    <div className="relative flex justify-end">
      <input type="checkbox" id="hamburger-check" className="peer hidden" />

      <label
        className="hidden peer-checked:block p-8 translate-y-2"
        htmlFor="hamburger-check"
      >
        <div className="bg-slate-900 h-2 w-12 mt-2 rotate-45"></div>
        <div className="bg-slate-900 h-2 w-12 mt-2 -rotate-45 -translate-y-[14px] "></div>
      </label>

      <label
        className="block peer-checked:hidden p-8"
        htmlFor="hamburger-check"
      >
        <div className="bg-slate-900 h-2 w-12 mt-2"></div>
        <div className="bg-slate-900 h-2 w-12 mt-2"></div>
        <div className="bg-slate-900 h-2 w-12 mt-2"></div>
      </label>
      <div className="hidden peer-checked:block rounded absolute w-36 h-48 p-4 bg-slate-800  top-10 right-24">
        <ul>
          <li>
            <a
              href="/notes"
              className="text-white text-2xl font-semibold hover:underline"
            >
              Notes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-2xl font-semibold hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-2xl font-semibold hover:underline"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="text-white text-2xl font-semibold hover:underline"
            >
              Login
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                logout;
              }}
              className="text-white text-2xl font-semibold hover:underline"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
