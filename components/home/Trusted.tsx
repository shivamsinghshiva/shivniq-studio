export default function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "OpenAI",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center text-gray-500 font-semibold uppercase tracking-widest">
          Trusted by Startups & Businesses
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">

          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white py-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <span className="text-xl font-bold text-gray-700">
                {company}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}