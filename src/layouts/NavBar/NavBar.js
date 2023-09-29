import DropdownMenu from '../../components/DropdownMenu';
import Logo from '../../components/Logo';
import UserIcon from '../../components/UserIcon';

export default function NavBar() {
    return (
        <nav className="navbar d-flex jcsb aifs">
            <Logo />
            <DropdownMenu />
        </nav>
    )
}