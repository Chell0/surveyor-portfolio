import { useInView } from "react-intersection-observer";


const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Boundary Surveys',
      description: 'Define property lines and resolve disputes with precision using advanced surveying equipment.',
      icon: '📐',
    },
    {
      title: 'Topographic Surveys',
      description: 'Detailed measurement and mapping of land features for area in topographic systems.',
      icon: '🏔️',
    },
    {
      title: 'Construction Surveys',
      description: 'Stakeout and layout services for construction projects ensuring accurate positioning.',
      icon: '️',
    },
    {
      title: 'Land Development',
      description: 'Comprehensive surveying solutions for land development and subdivision projects.',
      icon: '',
    },
    {
      title: 'GIS Mapping',
      description: 'Geographic Information Systems mapping and spatial data management services.',
      icon: '🗺️',
    },
    {
      title: 'GPS/GNSS Surveys',
      description: 'High-precision positioning using satellite technology for large-scale projects.',
      icon: '🛰️',
    },
  ]
  return (
    <section className="services" ref={ref}>
      <h2 className={`section-title ${inView ? 'fade-in' : ''}`}>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${inView ? 'scroll-reveal' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;