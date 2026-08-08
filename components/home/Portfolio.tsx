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
    <section
      id="portfolio"
      className="bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="font-semibold text-purple-600 dark:text-purple-400">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-4 text-5xl font-black text-gray-900 dark:text-white">
            Recent Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-8">
            Explore some of our recent work built with modern
            technologies.
          </p>

        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
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