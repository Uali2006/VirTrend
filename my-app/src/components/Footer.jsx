import logo from "../assets/logo2.png";
import github from "../assets/github.svg";

export default function Footer() {
    return (
        <footer className="footer" id="Contact">
            <div className="team">
                <p>Zhasmin</p>
                <p>Amirali</p>
                <p>Kasiyet</p>
                <p>Uali</p>
            </div>
            <div className="footer-brand">
                <img src={logo} alt="VirTrend" />
            </div>
            <div className="social">
                <a href="https://github.com">
                <img src={github} alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}