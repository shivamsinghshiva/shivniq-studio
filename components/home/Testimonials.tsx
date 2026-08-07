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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-purple-600 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-black mt-4">
            What Clients Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Our clients trust us to build high-quality digital products.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
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