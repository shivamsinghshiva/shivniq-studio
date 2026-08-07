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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-purple-600 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-5xl font-black mt-4">
            Everything You Need
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
            We help startups and businesses build world-class
            digital products with modern technologies.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl border border-purple-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
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