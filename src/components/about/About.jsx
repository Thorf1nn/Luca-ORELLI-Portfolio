import "./about.css"
import Me2 from "../../img/Me2.jpg";
import Epitech from "../../img/Epitech.png";

const About = () => {
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Me2}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">À propos de moi</h1>
                <p className="a-sub">
                    Bonjour je m'appelle Luca ORELLI.
                </p>
                <p className="a-desc">
                    Je suis étudiant en informatique à Epitech Montpellier.
                    Je suis passionné par la programmation et les nouvelles technologies. Je pratique le football américain
                    et la musculation. Je suis rigoureux, autodidacte et j'aime surtout travailler avec les
                    autres. J'ai principalement pratiqué le C lors de ma première année à Epitech.
                    J'ai également développé en Javascript et en Python.
                </p>
                <div className="a-formation">
                    <img src={Epitech}
                    alt=""
                    className="a-formation-img" />
                    <div className="a-formation-text">
                        <h4 className="a-formation-title">Expert en technologie de l'information.</h4>
                        <p className="a-formation-desc">
                            Titre RNCP niveau 7
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
