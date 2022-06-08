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
                <h1 className="a-title">A propos de moi</h1>
                <p className="a-sub">
                    Bonjour je m'appelle Luca ORELLI et je suis actuellement à Epitech Montpellier.
                </p>
                <p className="a-desc">
                    Étant passionner de nouvelles technologies depuis petit et ayant un atrai particulier pour l'informatique,
                    mais n'aimant pas particulierment la pédagogie scolaire classique, c'est tout naturellement que je me suis dirigé vers Epitech.
                    J'ai pu exerimenter différents langages durant ma scolarité tel que le C, le python et le javascript.
                    Je suis actuellement entrain d'apprendre le React.
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
