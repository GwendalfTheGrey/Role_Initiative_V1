import logoF from '../assets/img/logo-f.svg'
import logoFDice from '../assets/img/logo-f-dice.svg'

export default function Logo() {
    return (
            <div className='blur-wrapper' >
                <a className='logo' href=""><img src={logoF} alt="Logo de Role Initiative" /></a>
                <a className='logo' href=""><img className='blur-element blur-logo' src={logoFDice} /></a>
            </div>
    );
}