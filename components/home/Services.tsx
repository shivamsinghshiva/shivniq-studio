import {
  Globe,
  Smartphone,
  Palette,
  Bot,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern, responsive and lightning-fast websites.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Android & iOS applications with premium UI.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful and user-friendly digital experiences.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "Integrate AI into your business workflow.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Deploy scalable applications on the cloud.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Secure and reliable software solutions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
            OUR SERVICES
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mt-4 text-gray-900 dark:text-white">
            Everything You Need
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto leading-7 sm:leading-8 text-sm sm:text-base">
            We help startups and businesses build world-class
            digital products with modern technologies.
          </p>

        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-14 sm:mt-20">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                  <Icon size={27} className="sm:hidden" />
                  <Icon size={30} className="hidden sm:block" />
                </div>

                {/* Title */}
                <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-400">
                  {service.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}