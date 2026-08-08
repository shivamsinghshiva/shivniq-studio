import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Startup",
    review:
      "Shivniq Studio delivered an amazing website. The quality exceeded our expectations.",
  },
  {
    name: "Sarah Johnson",
    company: "E-Commerce",
    review:
      "Professional team with excellent communication. Highly recommended!",
  },
  {
    name: "Michael Brown",
    company: "Digital Agency",
    review:
      "Fast delivery, modern UI and outstanding support throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mt-4 text-gray-900 dark:text-white">
            What Clients Say
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Our clients trust us to build high-quality digital products.
          </p>

        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-14 sm:mt-20">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                "{item.review}"
              </p>

              {/* Client */}
              <div className="mt-7 sm:mt-8">

                <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  {item.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}