import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Floating from "@/components/animations/Floating";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-400 blur-[180px] opacity-20 dark:opacity-10"></div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-pink-400 blur-[180px] opacity-20 dark:opacity-10"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-300 blur-[150px] opacity-20 dark:opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <FadeUp>
          <div>

            <span className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-5 py-2 rounded-full font-medium">
              🚀 Premium Software Agency
            </span>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8 text-gray-900 dark:text-white">
              Building

              <span className="block bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                Digital Products
              </span>

              That Inspire.
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-xl mt-8 leading-9 max-w-xl">
              Shivniq Studio helps startups and businesses build
              beautiful websites, powerful web applications
              and mobile apps with modern technologies.
            </p>

            <div className="flex gap-5 mt-12 flex-wrap">

              <Button>
                Get Started
              </Button>

              <Button variant="secondary">
                View Portfolio
              </Button>

            </div>

          </div>
        </FadeUp>

        {/* Right Side */}
        <FadeUp>
          <div className="flex justify-center">

            <Floating>

              <div className="relative w-[420px] max-w-full rounded-[40px] border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-2xl transition-colors duration-300">

                <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-3xl"></div>

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Shivniq Studio
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Premium Web Agency
                    </p>

                  </div>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>

                </div>

                <div className="mt-10 space-y-5">

                  <div className="h-5 w-3/4 rounded-full bg-purple-100 dark:bg-purple-950"></div>

                  <div className="h-5 rounded-full bg-purple-100 dark:bg-purple-950"></div>

                  <div className="h-5 w-2/3 rounded-full bg-purple-100 dark:bg-purple-950"></div>

                </div>

                <div className="grid grid-cols-2 gap-5 mt-12">

                  <div className="rounded-2xl bg-purple-50 dark:bg-purple-950/50 p-6">

                    <h2 className="text-4xl font-black text-purple-600 dark:text-purple-400">
                      150+
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Projects
                    </p>

                  </div>

                  <div className="rounded-2xl bg-pink-50 dark:bg-pink-950/50 p-6">

                    <h2 className="text-4xl font-black text-pink-500 dark:text-pink-400">
                      80+
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Clients
                    </p>

                  </div>

                </div>

                <div className="mt-10 h-32 rounded-3xl bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>

              </div>

            </Floating>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}