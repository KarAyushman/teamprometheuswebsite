import {
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import HeroSection from "./ParticleEffectHero";

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? (
        <div className="-z-10">
          <HeroSection />
        </div>
      ) : (
        <div></div>
      )}
      <div className="fixed top-4 right-4 left-4 lg:w-auto w-80 flex flex-row place-items-center justify-between lg:ml-32 lg:mr-32 md:ml-20 md:mr-20 mr-2 ml-2 md:pl-8 md:pr-8 pl-2 pr-4 pt-2 pb-2 mt-4 mb-4 backdrop-blur-sm bg-white/5 rounded-full z-40">
        <NavLink to="/" className="flex flex-row pl-2 place-items-center">
          <img
            src="./assets/Prometheus.png"
            alt="Prometheus"
            className="w-20"
          />
          <div className="pl-2 font-prom-header-font text-lg hidden md:block text-slate-300">
            Prometheus
          </div>
        </NavLink>
        <div className="flex flex-row md:gap-8 gap-2 justify-center place-items-center text-center">
          <NavLink
            to="/team"
            className={({ isActive }) => {
              return isActive
                ? "text-promlogogold font-prom-header-font"
                : "text-slate-300 font-prom-header-font";
            }}
          >
            Team
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => {
              return isActive
                ? "text-promlogogold font-prom-header-font"
                : "text-slate-300 font-prom-header-font";
            }}
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive
                ? "text-promlogogold font-prom-header-font"
                : "text-slate-300 font-prom-header-font";
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
