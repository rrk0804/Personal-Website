import PurdueUniversityLogo from "./../assets/Purdue-University-logo.png";

interface EducationCardProps {
    image: string,
    name: string,
    link: string,
    degree: string,
    fromDate: string,
    endDate: string
}

function EducationCard({ image, name, link, degree, fromDate, endDate } : EducationCardProps) {
    return (
        <div className="education-card">
            <div className="school-image-wrapper">
                <img src={image} className="school-image" />
            </div>
            <div className="school-name">
                <a className="school-link" href={link}>{name} 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="right-arrow-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                </a>
                <p className="school-degree">{degree}</p>
            </div>
            <div className="date-range">
                {fromDate} - {endDate}
            </div>
        </div>
    );
}

function Education({ divRef } : { divRef: React.RefObject<HTMLDivElement> }) {
    const schools : EducationCardProps[] = [
        {
            image: PurdueUniversityLogo,
            name: "Purdue University",
            link: "https://www.purdue.edu",
            degree: "Bachelor of Science in Computer Engineering",
            fromDate: "Aug 2021",
            endDate: "Dec 2024"
        }
    ]

    return (
        <div className="education" ref={ divRef }>
            <h2 className="section-heading">Education</h2>
            <div className="education-cards">
                {schools.map((school) => <EducationCard image={school.image} name={school.name} 
                                                        link={school.link} degree={school.degree}
                                                        fromDate={school.fromDate} endDate={school.endDate} />)}
            </div>
        </div>
    );
}

export default Education;