import DiceBg from "./DiceBg";
import Functionnalities from "./Functionnalities";

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
                </article>
                    <DiceBg />
            </section>
            <Functionnalities/>
            <section className="section-spacing">
                <article className="article-spacing article-paragraph">
                    <div>
                        <h2 className="article-title">
                            Role Initiative
                        </h2>
                        <div>
                            <img src='' alt="" />
                        </div>
                    </div>
                    <p>
                        Notre existence à pour seul but de permettre à ceux et celles qui veulent commencer ou continuer leur voyage dans l’univers des jeux de rôle de ne pas se trouver limités par l’absence d’autres joueurs aux alentours, ou encore par le fait que personne ne veut les initier aux jeux.
                    </p>
                    <p>
                        Les salons ont chacun leur niveau attendu pour la participation à une partie. Les nouveaux joueurs peuvent donc ainsi choisir un salon qui leur est adapté avec un maître du jeu qui sera là pour les guider, et les joueurs plus adeptes pourront quant à eux se retrouver avec des personnes tout autant expérimentées.
                    </p>
                </article>
            </section>
        </main>
    );
}