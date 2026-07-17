const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>©{currentYear} Charles Ochieng'</div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/charles-ochieng-1376b8109/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span>Made with ☕ by <a href="https://kazifiti.com" target="_blank" rel="noopener noreferrer">
          Kazifiti
        </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;