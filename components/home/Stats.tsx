import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      end: 150,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      end: 80,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      end: 5,
      suffix: "+",
      label: "Years Experience",
    },
    {
      end: 99,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-700 to-fuchsia-600 dark:from-purple-950 dark:to-fuchsia-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center hover:bg-white/20 transition duration-300"
            >
              <h2 className="text-5xl font-black text-white">
                <CountUp
                  end={item.end}
                  duration={2}
                  suffix={item.suffix}
                />
              </h2>

              <p className="mt-4 text-purple-100">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}