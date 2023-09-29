import Logo from "../../components/Logo";
import LegalMentions from "../LegalMentions/LegalMentions";
import FooterNav from "./FooterNav"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content d-flex fdc aic">
                <Logo />
                <FooterNav />
            </div>
            <LegalMentions />
        </footer>
    )
}