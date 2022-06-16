import Splash from "../splash/Splash";

function LandingPage() {
  return (
    <>
      <section className="px-8 pt-6">
        <h1 className="text-2xl 2xl:text-6xl md:text-center">
          Easily capture <span className="text-indigo-500">learning notes</span>{" "}
          <br className="hidden lg:inline 2xl:hidden" />
          and <span className="text-indigo-500">retrieve</span> them anytime
        </h1>
        <h3 className="hidden 2xl:block 2xl:text-center text-2xl pt-4 md:pt-12 px-4">
          Brainy notes helps you create learning notes with ease, without
          disrupting you from your workflow, and just as easily retrieve them.
        </h3>
        <div className="2xl:pl-48 2xl:pt-24 md:flex 2xl:text-center 2xl:align-center">
          <div className="2xl:w-2/3 2xl:p-8">
            <img
              alt="people working"
              className="bg-pink-100 pt-6 md:h-72 2xl:h-96 object-contain"
              src="img/people.svg"
            />
          </div>
          <div className="hidden 2xl:block bg-red-200 2xl:w-full">
            <Splash />
          </div>
          <div className="bg-green-600 md:p-8">
            <h3 className="2xl:hidden text-2xl pt-4 md:pt-12 px-4">
              Brainy notes helps you create learning notes with ease, without
              disrupting you from your workflow, and just as easily retrieve
              them.
            </h3>
          </div>
        </div>
      </section>
      {/* <div className="mt-4 sm:mt-6">
        <button className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm">
          Get Started
        </button>
      </div> */}
    </>
  );
}

export { LandingPage };
