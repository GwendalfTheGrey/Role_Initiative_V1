import dice from '../assets/img/dice.svg';

export default function Dice() {
    return (
        <>
            <img className='dice-bg blur-element' src={dice} />
            <img className='dice-bg blur-element blur-dice-bg' src={dice} />
        </>
    )
}