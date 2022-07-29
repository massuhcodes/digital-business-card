import linkedin_icon from "../assets/linkedin-icon.png";
import email_icon from "../assets/email-icon.png";
import Icons from "./Icons";

export default function Details() {
    return (
        <div className="details">
            <div class="name-job-website-links">
                <div className="name-job-website">
                    <p className="name">Farah Massuh</p>
                    <p className="job">Frontend Developer</p>
                    <p className="website">farahmassuh.website</p>
                </div>
                <div className="links">
                    <a href="#" className="first-link">
                        <img src={email_icon} />
                        <span>Email</span>
                    </a>
                    <a href="#" className="second-link">
                        <img src={linkedin_icon} />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
            <div className="about-interests">
                <h3>About</h3>
                <p className="about-text">
                    I am a frontend developer with a particular interest in make
                    things simple and automating daily tasks. I try to keep up
                    with security and best practices, and am always looking for
                    new things to learn.
                </p>
                <h3>Interests</h3>
                <p className="interests-text">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon
                    buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                    fanatic.
                </p>
            </div>
            <Icons />
        </div>
    );
}
