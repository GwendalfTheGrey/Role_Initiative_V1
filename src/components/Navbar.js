import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import UserIcon from './UserIcon';

export default function Navbar() {
    return (
            <nav className='navbar-top d-flex jcsb aifs'>
                <Logo />
                {/* <ul> */}
                    {/* <li><a className='nav-link txt-clr'href="">Connexon/Inscription</a></li> */}
                    {/* <li><a className='nav-link txt-clr'href="#functionnalities">Fonctionnalités</a></li> */}
                    {/* <li><a className='nav-link txt-clr'href="#about">À propos</a></li> */}
                    {/* <li><a className='nav-link txt-clr'href="">Contact</a></li> */}
                    {/* <li><UserIcon/></li> */}
                {/* </ul> */}
                <DropdownMenu />
            </nav>
    );
}