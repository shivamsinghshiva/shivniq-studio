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
    <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <p className="text-center text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest">
          Trusted by Startups & Businesses
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">

          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                {company}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}