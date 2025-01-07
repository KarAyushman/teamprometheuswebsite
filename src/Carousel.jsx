export default function Carousel() {
  const statements = [
    'The primary goal of "Prometheus" is to advance autonomous soccer-playing robots, fostering innovation and excellence in robotics at VIT Vellore and across the nation.',
    "We aim to compete at the highest levels in global competitions while driving the development of swarm intelligence and humanoid robotics for cutting-edge advancements.",
    "Our focus is on integrating modern techniques like Reinforcement Learning (RL) and Computer Vision (CV) into robotics, addressing the existing gaps at VIT.",
    "By promoting interdisciplinary AI research, we aim to drive progress in swarm intelligence and humanoid robotics for the benefit of all robotics teams through publication of research papers.",
    "Strategic collaborations with academia and industry enable us to harness resources and expertise, positioning VIT at the forefront of global robotics innovation.",
    "We are dedicated to contributing to open-source robotics, fostering community growth, and advancing the field for the benefit of researchers worldwide.",
  ];
  return (
    <>
      <h1 className="font-bold md:text-7xl text-5xl md:pl-20 md:pr-20 pl-8 pr-8 pb-4 font-prom-header-font text-white">
        Our Vision
      </h1>
      <div className="md:pl-20 md:pr-20 md:pb-8 p-4 grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-4">
        {statements.map((statement, index) => {
          return (
            <div
              key={index}
              className="border-promlogogold border-2 group overflow-hidden text-white font-prom-header-font relative md:p-12 p-4 min-h-40 rounded-lg flex items-center justify-center md:text-lg text-base"
            >
              <h1 className="text-center">{statement}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
