import Header from "components/Header";
// import Layout from "components/Layout";
// import { StrictMode } from "react";
//import UnauthenticatedApp from "pages/UnAuthenticatedApp";
//import { useAuth } from "contexts/Auth";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth"

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-2xl">Brainy Notes</h1>
      </header>
      <Auth/>
      <nav>
        <ul className="flex justify-around bg-lime-600 text-neutral-50 gap-4">
          <li><a className="cursor-pointer block basis-1/5 px-2 py-4">Home</a></li>
          <li><a className="block basis-1/5 px-2 py-4">Notes</a></li>
          <li><a className="block basis-1/5 px-2 py-4">Login</a></li>
        </ul>
      </nav>
      <main className="">
        <div>
          <h2>Notes at ya service</h2>
          <p>
            Easily capture notes that matter to you, easily recall notes that
            matter to you
          </p>
        </div>
        <div className="flex">
        <div className="grow-0 shrink-0 basis-52">left side</div>
        <div className="grow-1">Content keeps growing or not</div>
        <div className="grow-0 shrink-0 basis-52">Right side</div>
        </div>
        <div>
        Demo showing stylistic numbers:
          <div className="flex justify-center items-center leading-3">
          <span className="text-4xl">$</span>
          <span className="text-6xl">20</span>
          <span className="text-2xl self-start">.00</span>
          </div>
        </div>
      </main>
    </>
  );
}
