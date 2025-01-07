import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import CustomCursor from "./Cursor";
import { useEffect, useState } from "react";
import ContactForm from "./Footer";

export default function Layout() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check if window is defined (we're in the browser)
    if (typeof window !== "undefined") {
      // Initial check
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is Tailwind's 'lg' breakpoint

      // Add resize listener
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div className="">
      {isLargeScreen && <CustomCursor />}
      <Navbar />
      <Outlet />
      <ContactForm />
    </div>
  );
}
