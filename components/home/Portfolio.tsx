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
  {
    title: "College Website & Management System",
    category: "Web Development",
    image: "/images/college-website.png",
    liveUrl: "https://college-website-93qk.onrender.com/",
    githubUrl: "https://github.com/shivamsinghshiva/college-website",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="font-semibold text-purple-600 dark:text-purple-400 text-sm sm:text-base">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            Recent Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-7 sm:leading-8">
            Explore some of our recent work built with modern
            technologies.
          </p>

        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="overflow-hidden aspect-[3/2]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">

                <span className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {project.category}
                </span>

                <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Buttons only for projects having links */}
                {project.liveUrl && (
                  <div className="flex flex-wrap gap-3 mt-5">

                    {/* Live Demo */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition"
                    >
                      Live Demo
                    </a>

                    {/* GitHub */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      GitHub
                    </a>

                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
