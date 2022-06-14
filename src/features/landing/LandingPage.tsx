import * as React from "react";

function LandingPage() {
  return (
    <>
      <div className="m-2 bg-blue-500 h-auto square"></div>
      <div className="m-2 bg-red-500 h-auto square"></div>
      <section className="grid gap-4 grid-cols-3 grid-rows-12 ">
        <img
          alt="people working"
          className="col-span-3 mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 
                   lg:hidden"
          src="img/people.svg"
        />

        <h1
          className="mt-6 text-2xl font-bold text-gray-800 sm:mt-8 
                     sm:text-4xl lg:text-3xl xl:text-4xl"
        >
          Easily capture <span className="text-indigo-500">learning notes</span>{" "}
          <br className="hidden lg:inline" />
          and <span className="text-indigo-500">retrieve</span> them anytime
        </h1>
        <p className="mt-2 text-2xl sm:mt-4 sm:text-xl">
          Brainy notes helps you create learning notes with ease, without
          disrupting you from your workflow, and just as easily retrieve them.
        </p>

        <div className="hidden relative lg:block 2xl:col-span-3">
          <img alt="people working" className="" src="img/people.svg" />
        </div>
      </section>
      <div className="mt-4 sm:mt-6">
        <button className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm">
          Get Started
        </button>
      </div>
    </>
  );
}

export { LandingPage };
