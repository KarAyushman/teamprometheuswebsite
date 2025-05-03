import { useState, useEffect } from "react";
import gsap from "gsap";
import * as XLSX from 'xlsx';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [expandedMember, setExpandedMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const response = await fetch('/assets/team_details.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        
        // Get first worksheet
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        console.log("Raw Excel data:", jsonData);
        
        // Transform data to match component structure
        const formattedData = jsonData.map((member, index) => ({
          id: index + 1,
          name: member.Name,
          designation: member.Designation,
          // Use a static path that follows the pattern in the assets/teamImages folder
          photo: member.Name ? `/assets/teamImages/${member.Name.toLowerCase().replace(/\s+/g, '_')}.jpg` : null,
          linkedin: member.Linkedin,
          github: member.Github,
          details: member.Description || "Team member at Prometheus."
        }));
        
        console.log("Formatted team data with local photo paths:", formattedData);
        
        setTeamMembers(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading team data:", error);
        setLoading(false);
      }
    };

    loadTeamData();
  }, []);

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

        {loading ? (
          <div className="text-white text-center py-8">Loading team data...</div>
        ) : (
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
                    src={member.photo || "/api/placeholder/300/300"}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/300/300";
                    }}
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
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-promlogogold hover:underline">
                            LinkedIn
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-promlogogold hover:underline">
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
