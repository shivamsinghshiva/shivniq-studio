import Image from "next/image";

const projects = [
  {
    title: "Modern Business Website",
    category: "Web Development",
    image: "/images/project1.png",
  },
  {
    title: "Fitness Mobile App",
    category: "App Development",
    image: "/images/project2.png",
  },
  {
    title: "AI Dashboard",
    category: "Artificial Intelligence",
    image: "/images/project3.png",
  },
];
export default function Portfolio() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="font-semibold text-purple-600">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Recent Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500 leading-8">
            Explore some of our recent work built with modern
            technologies.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full"
              />

              <div className="p-8">

                <span className="text-sm font-semibold text-purple-600">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}