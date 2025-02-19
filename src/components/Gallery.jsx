import hero from "../images/hero.jpg";

export default function Gallary() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900  sm:pb-20">
          <img
            alt=""
            src={hero}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Announcing our next round of funding.{" "}
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-balance text-sm font-base tracking-tight text-white sm:text-7xl">
                  Get a Designer Space You'll Love
                </h1>
                <p className="mt-8 text-xs font-light text-gray-300 sm:text-xl/8">
                  Designing spaces, crafting dreams.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#B19F6F]  px-9 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-[#eabb3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Start My Transformation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
