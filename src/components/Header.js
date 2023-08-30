import logoF from '../assets/img/logo-f.svg'
import UserImg from './UserIcon';

export default function Header() {
    return (
        <header>
            <nav>
                <a href=""><img src={logoF} alt="Logo de Role Initiative" /></a>
                <ul>
                    <li><a className='txt-clr'href="#functionnalities">Fonctionnalités</a></li>
                    <li><a className='txt-clr'href="#about">À propos</a></li>
                    <li><a className='txt-clr'href="">Contact</a></li>
                    <li>
                        <UserImg/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}