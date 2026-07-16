import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Land Surveying',
    'GIS Mapping',
    'Project Management',
    'Topographic Analysis',
    'GPS/GNSS Technology',
    'AutoCAD & ArcGIS',
    'Urban Planning Support',
    'Geodetic Positioning',
  ];


  return (
    <section className="about">
      <h1 className={`section-title ${inView ? 'fade-in' : ''}`}>About Me</h1>
      <div className="about-content" ref={ref}>
        <div className="about-image">
          <img src={`/images/about.jpg`} alt={`Charles Ochieng'`} />
        </div>
        <div className="about-text">
          <p>
            I am Charles Ochieng&apos;, a dedicated and experienced Land
            Surveyor with over 10 years of professional experience. I have had
            the privilege of working with the{" "}
            <strong>Kenya Urban Roads Authority (K.U.R.A) </strong>
            in Mombasa, Kenya, where I have honed my skills in boundary
            surveys, topographic mapping, construction layouts, and land
            subdivision. Throughout my career, I have been involved in a
            variety of projects, from urban road networks to detailed
            floodplain assessments and ALTA/NSPS Land Title surveys.
          </p>
          <p>
            My work is driven by a passion for precision, a commitment to
            delivering high-quality results, and ensuring that every project
            I undertake contributes to sustainable urban development. My
            experience in Mombasa has provided me with a deep understanding
            of the unique geographic and infrastructural challenges in
            coastal regions. Whether it&apos;s providing accurate land
            assessments or collaborating on large-scale construction
            projects, I bring a wealth of knowledge and expertise to every
            task.
          </p>
          <p>
            Let&apos;s work together to build the future of Kenya&apos;s infrastructure.
          </p>

          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item ${inView ? 'scroll-reveal' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }
                }>
                  {index + 1}. {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;