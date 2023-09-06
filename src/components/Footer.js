import FooterNav from "./FooterNav";
import LegalMentions from "./LegalMentions";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content d-flex fdc aic">
                <Logo />
                <FooterNav />
            </div>
            <LegalMentions />
        </footer>
    );
}