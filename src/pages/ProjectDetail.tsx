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
      '/images/lamu/lamu_1.jpg',
      '/images/lamu/lamu_2.jpg',
      '/images/lamu/lamu_3.jpg',
      '/images/lamu/lamu_4.jpg',
      '/images/lamu/lamu_5.jpg',
      '/images/lamu/lamu_6.jpg',
      '/images/lamu/lamu_7.jpg',
      '/images/lamu/lamu_8.jpg',
      '/images/lamu/lamu_9.jpg',
      '/images/lamu/lamu_10.jpg',
      '/images/lamu/lamu_11.jpg',
      '/images/lamu/lamu_12.jpg',
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
            key={index}
            src={image}
            alt={`${project.title} - Image ${index + 1}`}
            className={inView ? 'scroll-reveal' : ''}
            style={{ transitionDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;