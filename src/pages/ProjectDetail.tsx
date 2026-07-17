import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const project = {
    title: slug?.toUpperCase() || 'PROJECT',
    description: `This project showcases the key developments made in ${slug}, featuring detailed insights into the work involved.`,
    images: [
      `/images/${slug}/${slug}_1.jpg`,
      `/images/${slug}/${slug}_2.jpg`,
      `/images/${slug}/${slug}_3.jpg`,
      `/images/${slug}/${slug}_4.jpg`,
      `/images/${slug}/${slug}_5.jpg`,
      `/images/${slug}/${slug}_6.jpg`,
      `/images/${slug}/${slug}_7.jpg`,
      `/images/${slug}/${slug}_8.jpg`,
      `/images/${slug}/${slug}_9.jpg`,
      `/images/${slug}/${slug}_10.jpg`,
      `/images/${slug}/${slug}_11.jpg`,
      `/images/${slug}/${slug}_12.jpg`,
    ],
  };


  return (
    <div className="project-detail">
      <div className="project-detail-header" ref={ref}>
        <h1 className={`project-detail-title ${inView ? 'fade-in' : ''}`}>{project.title}</h1>
        <div className={`project-detail-description ${inView ? 'fade-in' : ''}`}>
          <h2>Project Detail</h2>
          <p>{project.description}</p>
          <Link to={"/projects"} className="btn-primary" style={{ marginTop: '2rem' }}>
            ← Back to Projects
          </Link>
        </div>
      </div>

      <div className="project-gallery">
        {project.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} view ${index + 1}`}
            className={inView ? 'scroll-reveal' : ''}
            style={{ transitionDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;