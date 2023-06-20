import './App.css';
import ArrowDownIcon from './components/icons/ArrowDownIcon/ArrowDownIcon';
import CVIcon from './components/icons/CVIcon/CVIcon';
import GitHubIcon from './components/icons/GitHubIcon/GitHubIcon';
import LinkedInIcon from './components/icons/LinkedInIcon/LinkedInIcon';
import MailIcon from './components/icons/MailIcon/MailIcon';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const number = 3;

  return (
    <div className="app">
      <section className="profile-container">
        <div className="profile-icons">
          <a href="https://www.linkedin.com/in/jlpaixaof/" target='blank'>
            <LinkedInIcon />
          </a>
          <a href="https://github.com/julliepx" target='blank'>
            <GitHubIcon />
          </a>
          <a href="mailto:jlpaixaof@gmail.com" target='blank'>
            <MailIcon />
          </a>
          <a href="CurriculoJulliePaixao.pdf" target='blank'>
            <CVIcon />
          </a>
        </div>
          <Outlet />
        <img src="https://github.com/julliepx.png" alt="Foto de Jullie Paixão, com a língua de fora e usando um headphone preto." />
      </section>
    </div>
  );
}

export default App;