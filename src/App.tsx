import './App.css';
import CVIcon from './components/icons/CVIcon/CVIcon';
import GitHubIcon from './components/icons/GitHubIcon/GitHubIcon';
import LinkedInIcon from './components/icons/LinkedInIcon/LinkedInIcon';
import MailIcon from './components/icons/MailIcon/MailIcon';

function App() {
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
        <div className="profile-infos">
          <h1>Oi, eu sou a Jullie</h1>
          <h2>Fullstack Developer</h2>
          <p>Tenho 22 anos e sou desenvolvedora fullstack com 1 ano de experiência trabalhando no mercado.</p>
        </div>
        <img src="https://github.com/julliepx.png" alt="Foto de Jullie Paixão, com a língua de fora e usando um headphone preto." />
      </section>
    </div>
  );
}

export default App;