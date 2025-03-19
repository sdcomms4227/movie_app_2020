import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>About this page: I built it because I love movies.</span>
            <span> - 2025, 2025, 2025</span>
        </div>
    );
}

export default About;