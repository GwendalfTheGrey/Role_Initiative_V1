import UserImg from '../assets/img/user-icon-full.svg';
import UserImgDice from '../assets/img/user-icon-dice.svg';

export default function UserIcon() {
    return (
        <div className='user-icon-wrapper'>
            <img src={UserImg} alt="Icône utilisateur" />
            <img className='user-icon-dice'src={UserImgDice}/>
        </div>
    )
}