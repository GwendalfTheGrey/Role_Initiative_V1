import Dice from "./Dice";

export default function Main() {
    return (
        <main>
            <section className='section-spacing blur-wrapper'>
                <article className='hero-spacing'>
                    <h1 className='hero-title'>
                        LE PORTAIL VERS D'AUTRES PLANS
                    </h1>
                    <p>
                        Role Initiative est une plateforme qui permet à quiconque de commencer ou continuer une partie de jeu de rôle et ce quelque soit votre niveau.
                        </p>
                    <button className='phantom-btn p-btn'>
                        Rejoindre
                    </button>
                    <Dice/>
                </article>
            </section>
        </main>
    );
}