import gsap from "gsap";
import { useState } from "react";

export default function Project() {
  const [activeVideo, setActiveVideo] = useState(null);

  const toggleVideo = (section) => {
    if (activeVideo === section) {
      setActiveVideo(null);
    } else {
      setActiveVideo(section);
    }
  };

  return (
    <div className="w-svh min-h-svh bg-black pt-32 pb-12">
      <div className="md:pl-20 md:pr-20 pl-8 pr-8">
        <h1 className="font-bold md:text-7xl text-5xl pb-8 font-prom-header-font text-white">
          Our RoboSoccer Project
        </h1>
        <p className="text-white text-lg mb-12 font-prom-header-font">
          Team Prometheus is building a cutting-edge autonomous robot for
          RoboCup competition. Our interdisciplinary approach combines advanced
          software algorithms, custom electronics, and precision-engineered
          hardware to create a competitive robosoccer platform.
        </p>

        {/* Software Section */}
        <div
          className="border-promlogogold border-2 rounded-lg p-8 mb-12"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            gsap.to("#link-0", { opacity: 100 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            gsap.to("#link-0", { opacity: 0 });
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
            Software
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white text-lg mb-6 font-prom-header-font">
                Our software stack leverages cutting-edge techniques in computer
                vision, machine learning, and real-time control systems. We've
                developed custom algorithms for:
              </p>
              <ul className="text-white space-y-4 font-prom-header-font">
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Real-time object detection and tracking
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Path planning and obstacle avoidance
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Strategic decision making and team coordination
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Reinforcement learning for improved gameplay
                </li>
              </ul>
              <button
                className="mt-6 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-promlogogold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white font-prom-header-font"
                onClick={() => toggleVideo("software")}
              >
                {activeVideo === "software" ? "Hide Video" : "Watch Demo"}
              </button>
            </div>

            {activeVideo === "software" && (
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-promlogogold text-lg font-prom-header-font mb-4">
                    Software Demo Video
                  </p>
                  <p className="text-white font-prom-header-font">
                    (Video placeholder - content to be added later)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Electronics Section */}
        <div
          className="border-promlogogold border-2 rounded-lg p-8 mb-12"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            gsap.to("#link-1", { opacity: 100 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            gsap.to("#link-1", { opacity: 0 });
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
            Electronics
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white text-lg mb-6 font-prom-header-font">
                Our custom electronics combine reliability with performance.
                We've designed and built:
              </p>
              <ul className="text-white space-y-4 font-prom-header-font">
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  High-efficiency motor drivers
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Integrated sensor arrays
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Wireless communication systems
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Power management systems for extended operation
                </li>
              </ul>
              <button
                className="mt-6 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-promlogogold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white font-prom-header-font"
                onClick={() => toggleVideo("electronics")}
              >
                {activeVideo === "electronics" ? "Hide Video" : "Watch Demo"}
              </button>
            </div>

            {activeVideo === "electronics" && (
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-promlogogold text-lg font-prom-header-font mb-4">
                    Electronics Demo Video
                  </p>
                  <p className="text-white font-prom-header-font">
                    (Video placeholder - content to be added later)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hardware Section */}
        <div
          className="border-promlogogold border-2 rounded-lg p-8"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            gsap.to("#link-2", { opacity: 100 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            gsap.to("#link-2", { opacity: 0 });
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
            Hardware
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white text-lg mb-6 font-prom-header-font">
                Our robot's physical design is optimized for performance on the
                soccer field:
              </p>
              <ul className="text-white space-y-4 font-prom-header-font">
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Lightweight yet durable chassis
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  High-torque, precision motor systems
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  Custom ball handling mechanisms
                </li>
                <li className="flex items-start">
                  <span className="text-promlogogold mr-2">•</span>
                  3D-printed components for rapid iteration
                </li>
              </ul>
              <button
                className="mt-6 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-promlogogold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white font-prom-header-font"
                onClick={() => toggleVideo("hardware")}
              >
                {activeVideo === "hardware" ? "Hide Video" : "Watch Demo"}
              </button>
            </div>

            {activeVideo === "hardware" && (
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-promlogogold text-lg font-prom-header-font mb-4">
                    Hardware Demo Video
                  </p>
                  <p className="text-white font-prom-header-font">
                    (Video placeholder - content to be added later)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
