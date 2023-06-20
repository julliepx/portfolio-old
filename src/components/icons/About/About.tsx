import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import ArrowDownIcon from '../ArrowDownIcon/ArrowDownIcon'

const About = () => {
  return (
    <div className="about-infos">
        <p>Olá! Sou uma entusiasta da engenharia de software com uma paixão especial por qualidade. Com uma sólida formação em desenvolvimento de software, adquiri experiência trabalhando com diversas tecnologias, incluindo Java, Spring Framework, Typescript, Angular e, mais recentemente, React. Essa experiência me permitiu ter uma visão abrangente e integrada dos projetos em que estou envolvida, desde o design até a entrega final.</p>
        <div className="back-button">
            <Link to="/"><ArrowDownIcon /></Link>
        </div>
    </div>
  )
}

export default About