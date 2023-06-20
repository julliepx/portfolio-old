import React, { Fragment } from 'react';
import './ProfileIntro.css';
import { Link } from 'react-router-dom';
import ArrowDownIcon from '../icons/ArrowDownIcon/ArrowDownIcon';

const ProfileIntro: React.FC = () => {
    return <div className="profile-infos">
        <h1>Oi, eu sou a Jullie</h1>
        <div className="profile-title">
            <h2>Fullstack Developer</h2>
            <h3>{'< />'}</h3>
        </div>
        <p>Tenho 22 anos e sou desenvolvedora fullstack com 1 ano de experiência trabalhando no mercado.</p>
        <div className="about-button">
            <Link to="about"><ArrowDownIcon /></Link>
        </div>
    </div>
}

export default ProfileIntro;