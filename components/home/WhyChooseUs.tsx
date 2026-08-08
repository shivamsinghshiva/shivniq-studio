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
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-center">
          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-5xl font-black text-gray-900 dark:text-white">
            We Build Better Digital Products
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-8">
            We combine creativity, technology and innovation to
            deliver world-class software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
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