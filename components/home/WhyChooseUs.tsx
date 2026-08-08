import {
  Rocket,
  ShieldCheck,
  Clock3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "We build and launch high-quality digital products quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    desc: "Security and reliability are built into every project.",
  },
  {
    icon: Clock3,
    title: "On-Time Support",
    desc: "We value your time and always meet project deadlines.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our team is always available whenever you need help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            We Build Better Digital Products
          </h2>

          <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-7 sm:leading-8">
            We combine creativity, technology and innovation to
            deliver world-class software solutions.
          </p>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-14 sm:mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center">
                  <Icon size={27} className="sm:hidden" />
                  <Icon size={30} className="hidden sm:block" />
                </div>

                {/* Title */}
                <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-7">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}