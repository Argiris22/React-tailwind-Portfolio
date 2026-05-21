import { Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with the team to bring ideas and spend some quality time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building my Future
            </h2>

            <div className="space-y-8 max-w-2xl">
              <div className="space-y-4 text-zinc-400">
                <p>
                  Software Engineer with significant experience in the design
                  and development of Front-End applications using modern
                  technologies such as HTML, CSS, JavaScript and React. I work
                  at EXALCO with the goal of improving user experience and
                  streamlining processes through the development of applications
                  and data management with SQL.
                </p>
                <p>
                  Outside of my professional career, I am actively involved in
                  developing personal projects, where I focus on applying new
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
