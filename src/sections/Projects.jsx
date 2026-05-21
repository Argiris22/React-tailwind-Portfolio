import { ArrowUpRight } from "lucide-react";

// εικονίδιο από το Hero component
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const projects = [
  {
    title: "Netflix-Clone",
    description: "some word about the project",
    image: "/projects/netflix-clone-wall.png",
    tags: ["React", "Stripe Checkout", "Redux", "Firestore", "Auth"],
    link: "https://netflix-clone-rust-psi.vercel.app/",
    github: "https://github.com/Argiris22/netflix-clone",
  },
  {
    title: "Recipe E-book",
    description: "some word about the project",
    image: "/projects/recipe-ebook.png",
    tags: ["Java", "Docker", "Spring Boot", "MySQL", "Swagger"],
    link: "https://drive.google.com/file/d/1cIwaIYVe5XRV487dvL-TfoqI65u5SaL8/view?usp=sharing",
    github: "https://github.com/Argiris22/Recipe-e-Book",
  },
  {
    title: "Μy Calendar",
    description: "some word about the project",
    image: "/projects/my-calendar.png",
    tags: ["HTML", "CSS", "JavaScript(vanilla)"],
    link: "https://argiris22.github.io/Calendar/",
    github: "https://github.com/Argiris22/Calendar",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG GLOWS */}
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Take a look at
            <span className="font-serif italic font-normal text-white">
              {" "}
              my projects.
            </span>
          </h2>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* img project */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* links inside img */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  {" "}
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {" "}
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
