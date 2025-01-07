import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMovement = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 24 / 2,
        y: clientY - 24 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMovement);
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);
  return (
    <>
      <div
        id="cursor"
        className="fixed top-0 left-0 bg-promlogogold h-6 w-6 rounded-full z-50 pointer-events-none mix-blend-exclusion"
      >
        <img
          id="goto-link"
          src="src\assets\arrow.png"
          alt="Go To Website"
          className="absolute top-0 left-0 p-2 opacity-0"
        />
        <img
          id="play-button"
          src="src\assets\play-button.png"
          alt="Play Button"
          className="absolute top-0 left-0 p-2 opacity-0"
        />
        <img
          id="pause-button"
          src="src\assets\pause.png"
          alt="pause"
          className="absolute top-0 left-0 p-2 opacity-0"
        />
        <img
          id="down-button"
          src="src\assets\arrow-down-sign-to-navigate.png"
          alt="go down"
          className="absolute top-0 left-0 p-2 opacity-0"
        />
        <img
          id="contact-us-button"
          src="src\assets\call.png"
          alt="contact us"
          className="absolute top-0 left-0 p-2 opacity-0"
        />
        <img
          id="prev-slide"
          src="src\assets\arrow-down-sign-to-navigate.png"
          alt="previous"
          className="absolute top-0 left-0 p-2 opacity-0 rotate-90"
        />
        <img
          id="next-slide"
          src="src\assets\arrow-down-sign-to-navigate.png"
          alt="next"
          className="absolute top-0 left-0 p-2 opacity-0 -rotate-90"
        />
      </div>
    </>
  );
};

export default CustomCursor;
