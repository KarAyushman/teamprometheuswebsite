// In your CustomCursor.jsx component
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    // Create animation context to be able to kill animations later
    const ctx = gsap.context(() => {
      // Initial setup - hide cursor until mouse moves
      gsap.set("#cursor", { opacity: 0 });
      gsap.set("#cursor-follower", { opacity: 0 });
      
      // Setup quickTo for high-performance animations
      const cursorXSetter = gsap.quickTo(cursorRef.current, "x", { duration: 0.2, ease: "power3.out" });
      const cursorYSetter = gsap.quickTo(cursorRef.current, "y", { duration: 0.2, ease: "power3.out" });
      
      const followerXSetter = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3.out" });
      const followerYSetter = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3.out" });

      // Show cursors on first mouse movement
      const handleFirstMove = (e) => {
        gsap.to("#cursor", { opacity: 1, duration: 0.3 });
        gsap.to("#cursor-follower", { opacity: 1, duration: 0.3 });
        window.removeEventListener("mousemove", handleFirstMove);
        window.addEventListener("mousemove", handleMouseMove);
      };

      // Handle mouse movement
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        
        // Update cursor position (centered)
        cursorXSetter(clientX);
        cursorYSetter(clientY);
        
        // Update follower position (with delay for trailing effect)
        followerXSetter(clientX);
        followerYSetter(clientY);
      };

      window.addEventListener("mousemove", handleFirstMove);

      // Handle cursor leaving window
      const handleMouseLeave = () => {
        gsap.to("#cursor", { opacity: 0, duration: 0.3 });
        gsap.to("#cursor-follower", { opacity: 0, duration: 0.3 });
      };

      const handleMouseEnter = () => {
        gsap.to("#cursor", { opacity: 1, duration: 0.3 });
        gsap.to("#cursor-follower", { opacity: 1, duration: 0.3 });
      };

      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousemove", handleFirstMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("mouseenter", handleMouseEnter);
      };
    });

    return () => ctx.revert(); // Clean up all GSAP animations
  }, []);

  // Effect to handle icon transitions
  useEffect(() => {
    const allIcons = [
      "goto-link", "play-button", "pause-button", "down-button",
      "contact-us-button", "prev-slide", "next-slide",
      "link-0", "link-1", "link-2", "link-3", "link-4", "link-5"
    ];

    // First hide all icons with a quick fade
    allIcons.forEach(iconId => {
      if (iconId !== activeIcon) {
        gsap.to(`#${iconId}`, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    });

    // Then show active icon
    if (activeIcon) {
      gsap.fromTo(
        `#${activeIcon}`,
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)" 
        }
      );
      
      // Make cursor bigger when icon is active
      gsap.to("#cursor", { 
        width: "36px", 
        height: "36px", 
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      
      gsap.to("#cursor-follower", { 
        width: "50px", 
        height: "50px", 
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    } else {
      // Return cursor to normal size when no icon
      gsap.to("#cursor", { 
        width: "24px", 
        height: "24px", 
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to("#cursor-follower", { 
        width: "40px", 
        height: "40px", 
        duration: 0.4,
        ease: "power2.out"
      });
    }
  }, [activeIcon]);

  // Expose the function globally to be called from other components
  useEffect(() => {
    window.setActiveCursorIcon = (iconId) => {
      setActiveIcon(iconId);
    };
    
    return () => {
      window.setActiveCursorIcon = undefined;
    };
  }, []);

  return (
    <>
      {/* Cursor follower (larger circle that follows behind) */}
      <div
        id="cursor-follower"
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-promlogogold rounded-full z-40 pointer-events-none translate-x-[-50%] translate-y-[-50%] mix-blend-exclusion"
      ></div>
      
      {/* Main cursor dot */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 bg-promlogogold h-6 w-6 rounded-full z-50 pointer-events-none translate-x-[-50%] translate-y-[-50%] mix-blend-exclusion flex items-center justify-center"
      >
        <img
          id="goto-link"
          src="src\assets\arrow.png"
          alt="Go To Website"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="play-button"
          src="src\assets\play-button.png"
          alt="Play Button"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="pause-button"
          src="src\assets\pause.png"
          alt="pause"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="down-button"
          src="src\assets\arrow-down-sign-to-navigate.png"
          alt="go down"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="contact-us-button"
          src="src\assets\call.png"
          alt="contact us"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="prev-slide"
          src="src\assets\arrow-down-sign-to-navigate.png"
          alt="previous"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain rotate-90"
        />
        <img
          id="next-slide"
          src="src\assets\arrow-down-sign-to-navigate.png"
          alt="next"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain -rotate-90"
        />
        <img
          id="link-0"
          src="src\assets\numbers\one.png"
          alt="one"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="link-1"
          src="src\assets\numbers\two.png"
          alt="two"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="link-2"
          src="src\assets\numbers\three.png"
          alt="three"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="link-3"
          src="src\assets\numbers\four.png"
          alt="four"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="link-4"
          src="src\assets\numbers\five.png"
          alt="five"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
        <img
          id="link-5"
          src="src\assets\numbers\six.png"
          alt="six"
          className="absolute inset-0 p-2 opacity-0 w-full h-full object-contain"
        />
      </div>
    </>
  );
};

export default CustomCursor;
