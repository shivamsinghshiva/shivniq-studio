import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const techs = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
];

export default function TechStack() {
  return (
    <section className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
            TECHNOLOGIES
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mt-4 text-gray-900 dark:text-white">
            Our Tech Stack
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 sm:leading-8">
            We build scalable applications using modern technologies.
          </p>

        </div>

        {/* Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 mt-14 sm:mt-20">

          {techs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
              >

                <Icon className="text-5xl sm:text-6xl mx-auto text-purple-600 dark:text-purple-400" />

                <h3 className="mt-4 sm:mt-6 font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  {tech.name}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}