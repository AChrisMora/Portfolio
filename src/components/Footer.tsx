import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="justify-content-center mx-auto text-center" style={{ width: '50%' }}>
      <h3><Link to="https://github.com/AChrisMora">Github</Link></h3>
    </footer>
  );
};

export default Footer;
