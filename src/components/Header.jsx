import Logo from "../images/logo-copy/my-logo.png";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
// import '../sass/_header.scss';

const Header = ({ children }) => {

  const { pathname } = useLocation();
  const helmetMetaData = {
    '/': {
      title: "Homepage",
      content: "A personal portfolio site built by Katy Chen, a Front-End Web Developer, based in Vancouver, BC", 
    },
    '/works': {
      title: "Works",
      content: "A web page displaying a collection of projects",
    },
    '/about': {
      title: "About",
      content: "Welcome to my Portfolio. Read through my about section to get to know me a little better.",
    },
    '/contact': {
      title: "Get in Touch",
      content: "Connect with me to collaborate",
    },
    '/info': {
      title: "Project Details",
      content: "View the details for each of my portfolio pieces."
    },
    '/goforwalkies': {
      title: "goforwalkies",
      content: ""
    },
      '/portfolio':{
        title: "portfolio",
        content: ""
      }
    
  };
  return (
    <>
      <Helmet>
        <title>{helmetMetaData[pathname.includes('details') ? '/details':pathname].title}</title>
        <meta name='description' content={helmetMetaData[pathname.includes('details')? '/details':pathname].content}/>
      </Helmet>
      <header className='header-container'>
        <div className='logo-container'>
          <NavLink to='/' className='logo'>
            <img src={Logo} alt="website logo"/>
          </NavLink>
        </div>
        {children}
      </header>
    </>
  );
}
export default Header;

