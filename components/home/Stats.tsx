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
    <section className="py-24 bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center hover:bg-white/20 transition duration-300"
            >
             <h2 className="text-5xl font-black">
  <CountUp
    end={item.end}
    duration={3}
    suffix={item.suffix}
    enableScrollSpy
    scrollSpyOnce
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