const experiences = [
  {
    period: "2024 - Present",
    role: " junior Software Engineer",
    company: "EXALCO S.A",
    description:
      "Currently, I am working at Exalco where I focus on enhancing user experience and improving process efficiency through Front End development and SQL data management.Also maintaning the network of the company.",
    technologies: [
      "React",
      "React native",
      "Swagger",
      "SQL developer",
      "Omada controller",
    ],
    current: true,
  },

  {
    period: "2022 - 2024",
    role: " Network Technical Support agent",
    company: "Cosmote Greece",
    description:
      "Diagnosed and resolved complex network infrastructure and connectivity issues (DNS, DHCP, routing) for enterprise and residential clients, ensuring high uptime.Analyzed system logs and network traffic to identify root causes of technical failures, improving first-contact resolution rates",
    technologies: [
      "Software / Enterprise: CRM, Siebel, Ticketing Systems, Remote Access Tools",
      "Diagnostics: Ping, Traceroute, Nslookup, Wireshark",
      "Protocols and Infrastructure(TCP/IP, DNS,IPV4-6,FTTH, VDSL/ADSL)",
    ],
    current: false,
  },
  {
    period: "2024 -",
    role: "Web Developer",
    company: "Freelance",
    description:
      "After my Master Degree balancing part-time employment with intensive software development training. Dedicated to building innovative projects exploring new tech concepts and continuous self-improvement. ",
    technologies: [
      "React",
      "JS",
      "SQL",
      "cloud DBs",
      "Firebase",
      "Postman",
      "auth",
      "Redux",
      "stripe",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/*Section header   */}
        <div className="max-w-3xl mb-16" />
        <span className="text-secondary-foreground text-4xl md:text-4xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 ">
          My tech{" "}
          <span className="font-serif italic font-normal text-white">
            Career{" "}
          </span>
          journey
        </span>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow[0_0_25px_rgba(32,178,166,0,8)]"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
