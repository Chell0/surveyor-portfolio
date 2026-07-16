import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const projects = [
    { title: 'Kwale', slug: 'kwale', color: 'black' },
    { title: 'Lamu', slug: 'lamu', color: 'gray' },
    { title: 'Project Three', slug: 'project-three', color: 'light' },
    { title: 'Project Four', slug: 'project-four', color: 'gray' },
    { title: 'Project Five', slug: 'project-five', color: 'gray' },
    { title: 'Project Six', slug: 'project-six', color: 'black' },
  ];

  return (
    <section className="projects" ref={ref}>
      <h1 className={`section-title ${inView ? 'fade-in' : ''}`}>My Projects</h1>
      <p className={`projects-subtitle ${inView ? 'fade-in' : ''}`}>
        Here are some of the amazing projects I've worked on, showcasing my commitment to design and functionality.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/projects/${project.slug}`}
            className={`project-card ${inView ? 'scroll-reveal' : ''}`}
            style={{
              transitionDelay: `${index * 0.1}s`,
              background: project.color === 'black' ? '#000' : project.color === 'gray' ? '#888' : '#fff',
              color: project.color === 'light' ? '#000' : '#fff'
            }}
          >
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;