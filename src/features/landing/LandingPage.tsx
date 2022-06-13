import * as React from "react";

function LandingPage() {
  return (
    <section className="bg-gray-100 ">
      <div className="grid lg:grid-cols-2">
        <div className="lg:px-12 lg:py-24 px-8 pt-2 mt-6 text-2xl font-bold text-gray-900 sm:text-4xl sm:mt-8lg:text-3xl">
          The easiest way to capture interesting{" "}
          <br className="hidden lg:inline" />
          <span className="text-indigo-500">learning notes </span> and then{" "}
          <span className="text-indigo-500"> retrieve </span>
          them
        </div>
        <div className="max-w-md mx-auto sm:max-w-xl">
          <img
            alt="people working"
            className="lg:hidden mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-84 sm:w-full sm:object-cover object-center"
            src="img/people.svg"
          />
          <div className="hidden relative lg:block">
            <img
              alt="people working"
              className="absolute inset-0"
              src="img/people.svg"
            />
          </div>
        </div>
      </div>
      <div className="mx-24 mt-4 sm:mt-6">
        <button className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm">
          Get Started
        </button>
      </div>
    </section>
  );
}

export { LandingPage };
