import styles from './DropdownMenu.module.scss';
import arrow from '../assets/img/arrow.svg';

export default function DropdownMenu() {
    return (
        <div className='blur-wrapper asc'>
            <img className='dropdown-arrow' src={arrow} alt="Menu déroulant" />
            <img className='dropdown-arrow blur-element blur-dropdown' src={arrow} />
        </div>
    )
}