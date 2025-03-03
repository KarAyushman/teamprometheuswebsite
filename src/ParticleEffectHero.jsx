import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import gsap from "gsap";

const HeroSection = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    initializeParticles();
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false, // Added to prevent fullscreen mode
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#EFBF04",
        },
        links: {
          color: "#EFBF04",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return <div className="min-h-screen bg-[#151616]" />; // Loading state
  }

  return (
    <div className="relative w-svh h-svh bg-[#151616]">
      <Particles
        id="tsparticles"
        particlesLoaded={(container) =>
          console.log("Particles loaded", container)
        }
        options={options}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div
          className="flex flex-col text-center p-8 h-svh justify-center items-center"
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 4 });
            //gsap.to("#down-button", { opacity: 100 });
            window.setActiveCursorIcon("down-button");
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1 });
            //gsap.to("#down-button", { opacity: 0 });
            window.setActiveCursorIcon(null);
          }}
          onClick={handleClick}
        >
          <h1 className="flex text-4xl md:text-6xl font-bold text-white mb-6 font-prom-header-font">
            Team Prometheus
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-prom-header-font">
            VITs Robocup Team taking it a step further
          </p>
        </div>
      </div>
      <hr ref={ref} className="p-1 border-promlogogold" />
    </div>
  );
};

export default HeroSection;
