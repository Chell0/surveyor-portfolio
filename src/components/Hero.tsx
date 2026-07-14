import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>LAND SURVEYOR</h1>
        <p className="hero-description">
          Precise land measurement and spatial data management using Total Stations,
          GPS/GNSS, AutoCAD, and ArcGIS. Objective solutions for property and construction.
        </p>
        <Link to="/contact" className="btn-primary">Get in touch →</Link>
      </div>
      <div className="hero-image">
        <img
          src="/images/profile.png"
          alt="Charles Ochieng - Land Surveyor"
        />
      </div>
    </section>
  );
}

export default Hero;