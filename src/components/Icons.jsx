import github_icon from "../assets/github-icon.png";
import instagram_icon from "../assets/instagram-icon.png";
import twitter_icon from "../assets/twitter-icon.png";

export default function Icons() {
    return (
        <div className="social-icons">
            <a href="https://github.com/massuhcodes" target="_blank">
                <img src={github_icon} />
            </a>
            <a href="https://www.instagram.com/farahmassuh_/" target="_black">
                <img src={instagram_icon} />
            </a>
            <a href="https://twitter.com/massuhcodes" target="_blank">
                <img src={twitter_icon} />
            </a>
        </div>
    );
}
