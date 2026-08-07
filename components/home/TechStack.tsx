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
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-purple-600 font-semibold">
            TECHNOLOGIES
          </span>

          <h2 className="text-5xl font-black mt-4">
            Our Tech Stack
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            We build scalable applications using modern technologies.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">

          {techs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
              >
                <Icon className="text-6xl mx-auto text-purple-600" />

                <h3 className="mt-6 font-bold">
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