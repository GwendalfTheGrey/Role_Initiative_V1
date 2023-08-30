import UserIcon from '../assets/img/user-icon-full.svg';
import UserIconDice from '../assets/img/user-icon-dice.svg';

export default function UserImg() {
    return (
        <div className='user-icon-wrapper'>
            <img src={UserIcon} alt="Icône utilisateur" />
            <img className='user-icon-dice'src={UserIconDice} alt="" />
        </div>
    )
}