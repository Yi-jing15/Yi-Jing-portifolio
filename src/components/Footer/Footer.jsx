import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const socialIcons = [
  { name: <FaGithub />, link: '#' },
  { name: <FaInstagram />, link: '#' },
  { name: <FaFacebook />, link: '#' },
];

const menuItems = [
  { text: 'About', link: '#about' },
  { text: 'Skills', link: '#skills' },
  { text: 'Projects', link: '#project' },
  { text: 'Experience', link: '#experience' },
  { text: 'Contact', link: '#contact' },
];

const Footer = () => {
  return (
      <footer className="footer">
      <ul className="social-icon">
        {socialIcons.map((icon, index) => (
          <li className="icon-elem" key={index}>
            <a href={icon.link} className="icon">
              {icon.name}
            </a>
          </li>
        ))}
      </ul>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <li className="menu-elem" key={index}>
            <a href={item.link} className="menu-icon">
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <p className="text">Copyright &copy;2025 Yi-Jing.com</p>
    </footer>
  )
};

export default Footer;