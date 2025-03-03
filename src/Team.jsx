import { useState } from "react";
import gsap from "gsap";

export default function Team() {
  // Sample team member data - this would be replaced with actual data
  const teamMembers = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Team Member ${index + 1}`,
    designation: [
      "Software Developer",
      "Electronics Engineer",
      "Hardware Engineer",
      "Project Manager",
      "AI Specialist",
    ][Math.floor(Math.random() * 5)],
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
  }));

  const [expandedMember, setExpandedMember] = useState(null);

  const toggleExpand = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="w-svh min-h-svh bg-black pt-32 pb-12">
      <div className="md:pl-20 md:pr-20 pl-8 pr-8">
        <h1 className="font-bold md:text-7xl text-5xl pb-8 font-prom-header-font text-white">
          Our Team
        </h1>
        <p className="text-white text-lg mb-12 font-prom-header-font">
          Meet the brilliant minds behind Team Prometheus. Our diverse team of
          experts is dedicated to pushing the boundaries of robotics and
          advancing our mission in the RoboCup competition.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`border-promlogogold border-2 bg-black rounded-lg overflow-hidden transition-all duration-300 ${
                expandedMember === member.id
                  ? "transform scale-105 shadow-vision"
                  : ""
              }`}
              onMouseEnter={() => {
                gsap.to("#cursor", { scale: 2 });
              }}
              onMouseLeave={() => {
                gsap.to("#cursor", { scale: 1 });
              }}
              onClick={() => toggleExpand(member.id)}
            >
              <div className="aspect-square bg-gray-800 flex items-center justify-center">
                <img
                  src="/api/placeholder/300/300"
                  alt={member.name}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-prom-header-font">
                  {member.name}
                </h3>
                <p className="text-promlogogold font-prom-header-font">
                  {member.designation}
                </p>

                {expandedMember === member.id && (
                  <div className="mt-4 text-gray-300 font-prom-header-font animate-fadeIn">
                    <p>{member.details}</p>
                    <div className="mt-4 flex gap-4">
                      <a href="#" className="text-promlogogold hover:underline">
                        LinkedIn
                      </a>
                      <a href="#" className="text-promlogogold hover:underline">
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
