import RajitKhatriPortrait from "./../assets/RajitKhatri.jpeg";

function Introduction() {
    return (
        <div className="introduction">
            <div className="introduction-name-title">
                <h1 className="introduction-name">
                    Hi, I'm Rajit 👋
                </h1>
                <p className="introduction-description">
                    Dedicated software engineer, UI/UX designer, and computer security enthusiast
                </p>
            </div>
            <div className="introduction-portrait-wrapper">
                    <img className="introduction-portrait" src={RajitKhatriPortrait} alt="Rajit Khatri portrait" />
            </div>
        </div>
    );
}

export default Introduction;