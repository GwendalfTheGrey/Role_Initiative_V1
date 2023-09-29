import { useState } from 'react';

export default function Inscription({addUser}) {
    
    const [usernameInput, setUsernameInput] = useState('');

    const [eamilInput, setEmailInput] = useState('');

    const [passwordInput, setPasswordInput] = useState('');

    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const handleChangeUsername = (e) => {
        const value = e.target.value;
        setUsernameInput(value)
    }
    
        const handleChangeEmail = (e) => {
            const value = e.target.value;
            setEmailInput(value)
        }

    const handleChangePassword = (e) => {
        const value = e.target.value;
        setPasswordInput(value)
    }

    const handleChangeConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPasswordInput(value)
    }

    const handleSignup = (e) => {
        e.preventDefault();
        (passwordInput === confirmPasswordInput) ?
        (addUser(usernameInput, eamilInput, passwordInput, confirmPasswordInput))
        : (alert('Vérifiez que vous avez bien rempli les champs correctement'));
    } 

    return (
        <fieldset className='signup d-flex fdc jcc'>
            <div className='d-flex jcsb'>
                <button className='p-btn'>Connexion</button>
                <button className='p-btn'>Inscription</button>
            </div>
            <form className='d-flex fdc aic signup-content'>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                id="username"
                type="text"
                placeholder="SkullCrusher"
                onChange={handleChangeUsername}
                required
                />
                
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                placeholder="skullcrusher@email.com"
                onChange={handleChangeEmail}
                required
                />

                <label htmlFor="password">Mot de passe</label>
                <input
                id="password"
                type="password"
                placeholder="DoudouToutMignon§5"
                onChange={handleChangePassword}
                required
                pattern='.{16,}'
                />

                <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                <input
                id="confirm-password"
                type="password"
                onChange={handleChangeConfirmPassword}
                required
                pattern='.{16,}'
                />

                <button
                className='p-btn'
                onClick={handleSignup}
                >
                    S'inscrire
                </button>
            </form>
        </fieldset>
    )
}