import "./Footer.css";
import Twitter from "./icons/icons8-twitter.svg";
import Youtube from "./icons/icons8-youtube.svg";
import Discord from "./icons/icons8-discord.svg";
import Instagram from "./icons/icons8-instagram.svg";
import LogoWhite from "./icons/logo-white.svg";

function Footer() {
  return (
    <div className="footer">
        <div className="section-1">
            <div className="section-1a">
                <h2>Get More Updates</h2>
                <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks</p>
                <form>
                    <input type="email" placeholder="Your Email..." className="email"/>
                    <button className="sign-up-button">Sign Up</button>
                </form>
            </div>
            <div className="section-1b">
                <p>Join our community</p>
                <div className="socials">
                    <a href="/" >
                        <img src={Twitter} alt="twitter-icon" width={"30px"} />
                    </a>
                    <a href="/" >
                        <img src={Youtube} alt="youtube-icon" width={"30px"} />
                    </a>
                    <a href="/" >
                        <img src={Discord} alt="discord-icon" width={"30px"} />
                    </a>
                    <a href="/" >
                        <img src={Instagram} alt="instagram-icon" width={"30px"} />
                    </a>
                </div>
            </div>
        </div>
        <div className="section-2">
            <div className="pt1">
                <img src={LogoWhite} alt="logo-white" />            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et fringilla tellus sodales ipsum phasellus cursus pulvinar ultrices mattis. Blandit habitant sed pretium vitae quisque urna lectus eget dapibus. Eget varius pharetra, purus diam iaculis non ac elementum at. Pharetra, tortor feugiat pretium cras. Eget morbi ornare netus vitae nisl.</p>
                <p><strong>&copy; 2024 Non-Fungible. all Right Reserved</strong></p>
            </div>
            <div className="pt2">
                <div className="pt2-1">
                    <p><strong>Browse</strong></p>
                    <a href="/">Marketplace</a>
                    <a href="/">Collections</a>
                    <a href="/">Create</a>
                    <a href="/">Verify Collection</a>
                </div>
                <div className="pt2-2">
                    <p><strong>Company</strong></p>
                    <a href="/">About</a>
                    <a href="/">FAQs</a>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
        
        </div>
      
    </div>
  );
}

export default Footer;
