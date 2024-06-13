import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import instagramLight from "../../assets/instagram-light.png";
import snapchatLight from "../../assets/snapchat-light.png";
import snapchatDark from "../../assets/snapchat-dark.jpeg";
import twitterDark from "../../assets/twitter-dark.svg";
import vscoLight from "../../assets/vsco-light.png";
import vscoDark from "../../assets/vsco-dark.png";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagramDark from "../../assets/instagram-dark.png";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const snapchatIcon = theme === 'light' ? snapchatLight : snapchatDark;
    const vscoIcon = theme === 'light' ? vscoDark : vscoLight;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Saloni Shah"/>
            <img className={styles.colorMode}
             src={themeIcon} 
             alt="Color mode icon" 
             onClick= {toggleTheme}
             />
        </div>
        <div className={styles.info}>
            <h1> Saloni
                <br/>
                Shah
            </h1>
            <h2>
                Frontend Developer
            </h2>
            <span>
                <a href="https://twitter.com/saloniiix18" target="_blank">
                <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/salonii78" target="_blank">
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/saloni-shah-a149b1250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="https://instagram.com/shah.salonii" target="_blank">
                <img src={instagramIcon} alt="Instagram icon" />
                </a> 
                <a href="https://snapchat.com/shah.salonii" target="_blank">
                <img src={snapchatIcon} alt="Snapchat icon" />
                </a>
                <a href="https://vsco.com/salonixshahh" target="_blank">
                <img src={vscoIcon} alt="Vsco icon" />
                </a>
            </span>
            <p className={styles.description}>
                 With the passion for developing modern React web apps for commercial businesses.
            </p>
            <a href={CV} download>
                <button className="hover" > Resume </button>
            </a>
        </div>
    </section>
  )
}

export default Hero