import EHLogo from "./../assets/EH-logo.jpg";
import PurdueLogo from "./../assets/Purdue-University-logo.png";

interface ExperienceCardProps {
    companyLogo: string,
    companyName: string,
    companyLocation: string,
    fromDate: string,
    endDate: string,
    description: string,
    skills: string[]
};

function ExperienceCard({ companyLogo, companyName, companyLocation, fromDate, endDate, description, skills } : ExperienceCardProps) {
    return (
        <div className="experience-card">
            <div className="experience-description-header">
                <div className="company-logo-wrapper">
                    <img className="company-logo" src={companyLogo} />
                </div>
                <div className="company-name-location">
                    <p className="company-name">
                        {companyName}
                    </p>
                    <p className="company-location">
                        {companyLocation}
                    </p>
                </div>
                <div className="experience-date-range">
                    {fromDate} - {endDate}
                </div>
            </div>
            <div className="skills-wrapper">
                {skills.map((skill) => <div className="skill">{skill}</div>)}
            </div>
            <div className="experience-description">
                {description}
            </div>
        </div>
    );
}

function Experience({ divRef } : { divRef: React.RefObject<HTMLDivElement> }) {
    const workExperience: ExperienceCardProps[] = [
        {
            companyLogo: PurdueLogo,
            companyName: "Purdue University",
            companyLocation: "Teaching Assistant - ECE 39595",
            fromDate: "Aug 2024",
            endDate: "Dec 2024",
            description: "This was my second time being a Teaching Assistant at Purdue University. " +
                         "I was a part of ECE 39595: Object Oriented Programming in C++'s teaching team. I held " + 
                         "office hours to provide one-on-one help to students in completing class projects. " +
                         "I also designed exam questions and graded exam papers.",
            skills: ["C++", "Object Oriented Programming", "Communication", "Leadership"]
        },
        {
            companyLogo: EHLogo,
            companyName: "Elevance Health",
            companyLocation: "Software Engineer",
            fromDate: "May 2024",
            endDate: "Aug 2024",
            description: "This was my second internship at Elevance Health (formerly Anthem, Inc.). " +
                         "I created a fullstack web application for automating my team's cybersecurity " + 
                         "vulnerability management workflow. I used Python's Django framework to create " +
                         "the backend and Angular to create the frontend. I also learned a lot about Agile " +
                         "project management and software testing.",
            skills: ["TypeScript", "Angular", "Python", "Django", "SQL"]
        }, 
        {
            companyLogo: PurdueLogo,
            companyName: "Purdue University",
            companyLocation: "Reasearch Assistant",
            fromDate: "Jan 2024",
            endDate: "May 2024",
            description: "I was a member of a research team that seeked to protect open source software " +
                         "supply chains from attackers. I created a script in Python for " +
                         "evaluating security of 100+ open source projects by examining their CI/CD workflows. " +
                         "I performed static analysis of GitHub Actions scripts, gave each project a security " +
                         "score, and identified security vulnerabilities.",
            skills: ["Python", "GitHub Actions", "RegEx"]
        },
        {
            companyLogo: EHLogo,
            companyName: "Elevance Health",
            companyLocation: "Information Technology Analyst",
            fromDate: "Jun 2024",
            endDate: "Aug 2024",
            description: "This was my first internship at Elevance Health (formerly Anthem, Inc.). " +
                         "I performed data analysis on the company's information technology incidents " +
                         "to find patterns in the data. Using tools like Python and Tableau, I created a " +
                         "dashboard for displaying incidents metrics and provided recommendations for " +
                         "reducing the number of incidents. I also learned about ServiceNow and created dashboards " +
                         "in the platform for summarizing incidents data.",
            skills: ["Python", "Tableau", "ServiceNow"]
        }
    ];

    return (
            <div ref={ divRef } className="experience">
                <h2 className="section-heading">
                    Experience
                </h2>
                <div className="experience-cards">
                    {workExperience.map((experience) => {
                        return (
                            <ExperienceCard companyLogo={experience.companyLogo}
                                            companyName={experience.companyName}
                                            companyLocation={experience.companyLocation}
                                            fromDate={experience.fromDate}
                                            endDate={experience.endDate}
                                            description={experience.description}
                                            skills={experience.skills} />
                        );
                    })}
                </div>
            </div>
    );
}

export default Experience;