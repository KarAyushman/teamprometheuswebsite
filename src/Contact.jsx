import gsap from "gsap";

export default function Contact() {
  return (
    <div className="w-svh min-h-svh bg-black pt-32 pb-12">
      <div className="md:pl-20 md:pr-20 pl-8 pr-8">
        <h1 className="font-bold md:text-7xl text-5xl pb-8 font-prom-header-font text-white">
          About Our Team
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            className="border-promlogogold border-2 rounded-lg p-8 group overflow-hidden relative"
            onMouseEnter={() => {
              gsap.to("#cursor", { scale: 4 });
              //gsap.to("#link-0", { opacity: 100 });
              window.setActiveCursorIcon("link-0");
            }}
            onMouseLeave={() => {
              gsap.to("#cursor", { scale: 1 });
              //gsap.to("#link-0", { opacity: 0 });
              window.setActiveCursorIcon(null);
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
              Pioneer in Southern India
            </h2>
            <p className="text-white text-lg font-prom-header-font">
              Team Prometheus is proud to be one of the first teams from
              Southern India competing in the prestigious RoboCup soccer
              competition. Our journey began with a vision to represent VIT
              Vellore on the global robotics stage, and we continue to push the
              boundaries of what's possible in autonomous systems.
            </p>
          </div>

          <div
            className="border-promlogogold border-2 rounded-lg p-8 group overflow-hidden relative"
            onMouseEnter={() => {
              gsap.to("#cursor", { scale: 4 });
              window.setActiveCursorIcon("link-1");
            }}
            onMouseLeave={() => {
              gsap.to("#cursor", { scale: 1 });
              window.setActiveCursorIcon(null);
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
              Our Journey
            </h2>
            <p className="text-white text-lg font-prom-header-font">
              Since our inception, we've grown from a small group of enthusiasts
              to a full-fledged team of innovators. Our dedication to excellence
              in robotics has led us through challenges and triumphs, shaping us
              into the competitive team we are today.
            </p>
          </div>
        </div>

        <div
          className="border-promlogogold border-2 rounded-lg p-8 mb-16"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            //gsap.to("#link-2", { opacity: 100 });
            window.setActiveCursorIcon("link-2");
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            //gsap.to("#link-2", { opacity: 0 });
            window.setActiveCursorIcon(null);
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl text-promlogogold font-bold mb-2 font-prom-header-font">
                10+
              </div>
              <p className="text-white font-prom-header-font">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-promlogogold font-bold mb-2 font-prom-header-font">
                5+
              </div>
              <p className="text-white font-prom-header-font">Competitions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-promlogogold font-bold mb-2 font-prom-header-font">
                30+
              </div>
              <p className="text-white font-prom-header-font">Team Members</p>
            </div>
          </div>
        </div>

        <div
          className="border-promlogogold border-2 rounded-lg p-8"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            //gsap.to("#link-3", { opacity: 100 });
            window.setActiveCursorIcon("link-3");
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            //gsap.to("#link-3", { opacity: 0 });
            window.setActiveCursorIcon(null);
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
            Our Vision for the Future
          </h2>
          <p className="text-white text-lg mb-6 font-prom-header-font">
            As we continue to evolve, our goals remain ambitious:
          </p>
          <ul className="text-white space-y-4 font-prom-header-font">
            <li className="flex items-start">
              <span className="text-promlogogold mr-2">•</span>
              Establishing VIT Vellore as a center of excellence for robotics in
              India
            </li>
            <li className="flex items-start">
              <span className="text-promlogogold mr-2">•</span>
              Advancing research in swarm intelligence and autonomous systems
            </li>
            <li className="flex items-start">
              <span className="text-promlogogold mr-2">•</span>
              Creating a sustainable ecosystem for robotics innovation and
              education
            </li>
            <li className="flex items-start">
              <span className="text-promlogogold mr-2">•</span>
              Representing India at international robotics competitions with
              distinction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
