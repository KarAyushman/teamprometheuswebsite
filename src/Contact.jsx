import gsap from "gsap";
import { useState } from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("sponsors");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Accurate sponsor data
  const sponsors = [
    {
      id: 1,
      name: "VIT University",
      logo: "https://placehold.co/200x100/222/gold?text=VIT",
      tier: "Academic",
      description: "Our home institution providing facilities, mentorship, and academic support for our robotics initiatives."
    },
    {
      id: 2,
      name: "SOLIDWORKS",
      logo: "https://placehold.co/200x100/222/gold?text=SOLIDWORKS",
      tier: "Technical",
      description: "Providing industry-standard CAD software for our team to design cutting-edge robotic systems."
    }
  ];

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: "How can my company sponsor Team Prometheus?",
      answer: "We offer various sponsorship tiers with different benefits. Our sponsorship packages include logo placement on our robots and team attire, social media recognition, direct collaboration opportunities, and more. Please contact us at sponsorship@prometheus.team for detailed information."
    },
    {
      id: 2,
      question: "What competitions does Team Prometheus participate in?",
      answer: "We are preparing to compete in the RoboCup Soccer competition, one of the world's leading robotics competitions. While we haven't participated in competitions yet, we're actively developing our robots and aim to compete in the upcoming RoboCup events."
    },
    {
      id: 3,
      question: "Can we hire Team Prometheus members as interns?",
      answer: "Yes! Many of our team members are available for internships in robotics, programming, AI, and related fields. We can facilitate connections between our talented members and your company. Please reach out with specific requirements."
    },
    {
      id: 4,
      question: "How is Team Prometheus structured?",
      answer: "Our team is organized into specialized sub-teams focusing on mechanical design, electrical systems, software development, AI research, and project management. Each sub-team has dedicated leads who coordinate with our faculty advisors and team captain."
    },
    {
      id: 5,
      question: "Does Team Prometheus offer workshops or demonstrations?",
      answer: "Yes, we regularly conduct workshops on robotics and AI at VIT Vellore and can arrange special demonstrations for sponsors and educational institutions. These events showcase our technology and help inspire the next generation of robotics enthusiasts."
    }
  ];

  // RoboCup schedule with accurate dates for 2025
  const teamAvailability = [
    { month: "January", status: "Development", available: "Available" },
    { month: "February", status: "Development", available: "Available" },
    { month: "March", status: "Development", available: "Available" },
    { month: "April", status: "Testing Phase", available: "Limited" },
    { month: "May (Current)", status: "RoboCup Japan Open 2025", available: "Unavailable" },
    { month: "June", status: "RoboCup Preparation", available: "Limited" },
    { month: "July", status: "RoboCup 2025 (July 15-21, Salvador)", available: "Unavailable" },
    { month: "August", status: "RoboCup Malaysia Open 2025 (Aug 14-18)", available: "Unavailable" },
    { month: "September", status: "Development", available: "Available" },
    { month: "October", status: "RoboCup Brazil Open (Oct 13-19)", available: "Unavailable" },
    { month: "November", status: "Development", available: "Available" },
    { month: "December", status: "Break", available: "Limited" }
  ];

  // Accurate team stats
  const teamStats = [
    { label: "Years Active", value: "1" },
    { label: "Team Members", value: "30+" },
    { label: "Competitions", value: "0" },
    { label: "Robot Designs", value: "3" },
    { label: "Sponsors", value: "2" },
    { label: "Current Projects", value: "5" }
  ];

  return (
    <div className="w-svh min-h-svh bg-black pt-32 pb-12">
      <div className="md:px-20 px-8 max-w-7xl mx-auto">
        <h1 className="font-bold md:text-7xl text-5xl pb-4 font-prom-header-font text-white">
          Connect With Prometheus
        </h1>
        <p className="text-white text-lg mb-8 font-prom-header-font max-w-3xl">
          Discover partnership opportunities with Southern India's pioneering RoboCup team. We're a young team with big ambitions, working toward our competition debut.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {teamStats.map((stat, index) => (
            <div 
              key={index}
              className="border-promlogogold border-2 rounded-lg p-4 text-center hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
              onMouseEnter={() => {
                gsap.to("#cursor", { scale: 2 });
              }}
              onMouseLeave={() => {
                gsap.to("#cursor", { scale: 1 });
              }}
            >
              <div className="text-4xl text-promlogogold font-bold mb-2 font-prom-header-font">
                {stat.value}
              </div>
              <p className="text-white text-sm font-prom-header-font">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveTab("sponsors")}
              className={`py-4 font-prom-header-font text-lg transition-colors ${
                activeTab === "sponsors" 
                  ? "text-promlogogold border-b-2 border-promlogogold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Our Sponsors
            </button>
            <button 
              onClick={() => setActiveTab("faq")}
              className={`py-4 font-prom-header-font text-lg transition-colors ${
                activeTab === "faq" 
                  ? "text-promlogogold border-b-2 border-promlogogold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => setActiveTab("availability")}
              className={`py-4 font-prom-header-font text-lg transition-colors ${
                activeTab === "availability" 
                  ? "text-promlogogold border-b-2 border-promlogogold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Team Availability
            </button>
          </div>
        </div>

        {/* Sponsors Tab */}
        {activeTab === "sponsors" && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
              {sponsors.map((sponsor) => (
                <div 
                  key={sponsor.id}
                  className="border-promlogogold border-2 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
                  onMouseEnter={() => {
                    gsap.to("#cursor", { scale: 2 });
                  }}
                  onMouseLeave={() => {
                    gsap.to("#cursor", { scale: 1 });
                  }}
                >
                  <div className="h-32 flex items-center justify-center p-4 bg-gray-900">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} logo`} 
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white font-prom-header-font">
                        {sponsor.name}
                      </h3>
                      <span className="px-3 py-1 bg-black border border-promlogogold rounded-full text-xs text-promlogogold">
                        {sponsor.tier}
                      </span>
                    </div>
                    <p className="text-gray-300 font-prom-header-font">
                      {sponsor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="border-promlogogold border-2 rounded-lg p-8 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
              onMouseEnter={() => {
                gsap.to("#cursor", { scale: 2 });
              }}
              onMouseLeave={() => {
                gsap.to("#cursor", { scale: 1 });
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-4 font-prom-header-font">
                Become a Sponsor
              </h2>
              <p className="text-white text-lg mb-6 font-prom-header-font">
                Partner with Team Prometheus as we build toward our competition debut. As our team grows, your support will help us achieve our goals. As a sponsor, you'll gain:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-promlogogold mr-3 text-2xl">•</span>
                  <p className="text-gray-300 font-prom-header-font">Brand visibility at international competitions</p>
                </div>
                <div className="flex items-start">
                  <span className="text-promlogogold mr-3 text-2xl">•</span>
                  <p className="text-gray-300 font-prom-header-font">Access to top engineering talent</p>
                </div>
                <div className="flex items-start">
                  <span className="text-promlogogold mr-3 text-2xl">•</span>
                  <p className="text-gray-300 font-prom-header-font">Collaboration on cutting-edge robotics research</p>
                </div>
                <div className="flex items-start">
                  <span className="text-promlogogold mr-3 text-2xl">•</span>
                  <p className="text-gray-300 font-prom-header-font">Team demonstrations and technology showcases</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="mailto:sponsor@prometheus.team" 
                  className="inline-block bg-promlogogold text-black font-bold py-3 px-8 rounded-lg hover:bg-promlogogold/80 transition-colors duration-300 font-prom-header-font"
                >
                  Discuss Sponsorship
                </a>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="animate-fadeIn">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className="border-promlogogold border-2 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
                  onMouseEnter={() => {
                    gsap.to("#cursor", { scale: 2 });
                  }}
                  onMouseLeave={() => {
                    gsap.to("#cursor", { scale: 1 });
                  }}
                >
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="text-xl font-bold text-white font-prom-header-font">
                      {faq.question}
                    </h3>
                    <span className={`text-promlogogold transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 py-4 border-t border-gray-800 animate-fadeIn">
                      <p className="text-gray-300 font-prom-header-font">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div 
              className="mt-8 border-promlogogold border-2 rounded-lg p-8 text-center hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
              onMouseEnter={() => {
                gsap.to("#cursor", { scale: 2 });
              }}
              onMouseLeave={() => {
                gsap.to("#cursor", { scale: 1 });
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-prom-header-font">
                Have a question not answered here?
              </h3>
              <p className="text-gray-300 font-prom-header-font mb-6">
                Our team is ready to help with any specific inquiries you might have.
              </p>
              <a 
                href="#footer-contact" 
                className="inline-block bg-promlogogold text-black font-bold py-3 px-8 rounded-lg hover:bg-promlogogold/80 transition-colors duration-300 font-prom-header-font"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#footer-contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us Below
              </a>
            </div>
          </div>
        )}

        {/* Availability Tab */}
        {activeTab === "availability" && (
          <div className="animate-fadeIn">
            <div 
              className="border-promlogogold border-2 rounded-lg p-8 mb-8 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
              onMouseEnter={() => {
                gsap.to("#cursor", { scale: 2 });
              }}
              onMouseLeave={() => {
                gsap.to("#cursor", { scale: 1 });
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-prom-header-font">
                Team Availability & RoboCup Calendar {new Date().getFullYear()}
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="pb-4 text-promlogogold font-prom-header-font">Month</th>
                      <th className="pb-4 text-promlogogold font-prom-header-font">Team Status</th>
                      <th className="pb-4 text-promlogogold font-prom-header-font">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamAvailability.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-800 ${
                          item.available === "Available" 
                            ? "hover:bg-green-900/10" 
                            : item.available === "Limited" 
                              ? "hover:bg-yellow-900/10" 
                              : "hover:bg-red-900/10"
                        }`}
                      >
                        <td className="py-4 text-white font-prom-header-font">{item.month}</td>
                        <td className="py-4 text-gray-300 font-prom-header-font">{item.status}</td>
                        <td className="py-4 font-prom-header-font">
                          <span 
                            className={`px-3 py-1 rounded-full text-xs ${
                              item.available === "Available" 
                                ? "bg-green-900/30 text-green-400" 
                                : item.available === "Limited" 
                                  ? "bg-yellow-900/30 text-yellow-400" 
                                  : "bg-red-900/30 text-red-400"
                            }`}
                          >
                            {item.available}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div 
              className="border-promlogogold border-2 rounded-lg p-8 mb-8 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
              onMouseEnter={() => {
                gsap.to("#cursor", { scale: 2 });
              }}
              onMouseLeave={() => {
                gsap.to("#cursor", { scale: 1 });
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-prom-header-font">
                RoboCup 2025 Schedule Highlights
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="pb-4 text-promlogogold font-prom-header-font">Date</th>
                      <th className="pb-4 text-promlogogold font-prom-header-font">Event</th>
                      <th className="pb-4 text-promlogogold font-prom-header-font">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/10">
                      <td className="py-4 text-white font-prom-header-font">May 2-5, 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">RoboCup Japan Open 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">Japan</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/10">
                      <td className="py-4 text-white font-prom-header-font">May 7-9, 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">RoboCup Mexican Open</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">Mexico</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/10">
                      <td className="py-4 text-white font-prom-header-font">July 15-21, 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">RoboCup 2025 World Championship</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">Salvador, Brazil</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/10">
                      <td className="py-4 text-white font-prom-header-font">August 14-18, 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">RoboCup Malaysia Open 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">Malaysia</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/10">
                      <td className="py-4 text-white font-prom-header-font">October 13-19, 2025</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">RoboCup Brazil Open</td>
                      <td className="py-4 text-gray-300 font-prom-header-font">Vitória, Brazil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="border-promlogogold border-2 rounded-lg p-8 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
                onMouseEnter={() => {
                  gsap.to("#cursor", { scale: 2 });
                }}
                onMouseLeave={() => {
                  gsap.to("#cursor", { scale: 1 });
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 font-prom-header-font">
                  Schedule a Demo
                </h2>
                <p className="text-gray-300 font-prom-header-font mb-6">
                  Interested in seeing our robot designs and prototypes? We offer technical demonstrations of our systems and development process for potential sponsors, academic partners, and technology enthusiasts.
                </p>
                <a 
                  href="mailto:demos@prometheus.team" 
                  className="inline-block bg-promlogogold text-black font-bold py-3 px-6 rounded-lg hover:bg-promlogogold/80 transition-colors duration-300 font-prom-header-font"
                >
                  Request a Demo
                </a>
              </div>

              <div 
                className="border-promlogogold border-2 rounded-lg p-8 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all duration-300"
                onMouseEnter={() => {
                  gsap.to("#cursor", { scale: 2 });
                }}
                onMouseLeave={() => {
                  gsap.to("#cursor", { scale: 1 });
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 font-prom-header-font">
                  Workshop & Mentorship
                </h2>
                <p className="text-gray-300 font-prom-header-font mb-6">
                  Our team regularly conducts workshops on robotics, AI, and competitive design. We also offer mentorship programs for budding robotics enthusiasts and student teams at VIT and surrounding institutions.
                </p>
                <a 
                  href="mailto:workshops@prometheus.team" 
                  className="inline-block bg-promlogogold text-black font-bold py-3 px-6 rounded-lg hover:bg-promlogogold/80 transition-colors duration-300 font-prom-header-font"
                >
                  Arrange Workshop
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
