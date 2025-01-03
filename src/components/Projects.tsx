import JPMorganLogo from "./../assets/JPMorgan-logo2.jpg";
import SpotifyLogo from "./../assets/spotify-logo-5.png";
import InstagramLogo from "./../assets/instagram-logo.png";
import PurdueLogo from "./../assets/Purdue-University-logo.png";

interface ProjectLink {
    linkName: string,
    link: string
}

interface ProjectCardProps {
    image: string,
    name: string,
    links: ProjectLink[],
    description: string,
    skills: string[]
}

function ProjectCard({ image, name, links, description, skills } : ProjectCardProps) {
    return (
        <>
            <div className="project-card">
                <div className="project-header">
                    <div className="project-image-wrapper">
                        <img className="project-image" src={image} />
                    </div>
                    <div className="project-name-links">
                        <p className="project-name">
                            {name}
                        </p>
                        <div className="project-links">
                            {links.map((link) => <a className="project-link" href={link.link}>{link.linkName} &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="redirect-icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                                <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                            </a>)}
                        </div>
                    </div>
                </div>
                <div className="project-body">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="project-skills">
                    {skills.map((skill) => <div className="skill"> {skill} </div>)}
                </div>
            </div>
        </>
    );
}

function Projects({ divRef } : { divRef: React.RefObject<HTMLDivElement> }) {

    const projects: ProjectCardProps[] = [
        {
            image: JPMorganLogo,
            name: "JPMC Code For Good",
            links: [
                {
                    linkName: "GitHub",
                    link: "https://github.com/cfgcolumbus23/Team-3"
                }
            ],
            description: "This was the first hackathon I did in college. I worked " + 
                         "in a team to create an internal landing page for Goodwill Industries, " +
                         "a non-profit that provides job training and employment placement to " +
                         "people who face barriers in their employment. I used exciting technologies " +
                         "like React, JavaScript, and Tailwind to create the frontend and NodeJS, " +
                         "Express, and MongoDB to create the backend. Our team ended up winning the " +
                         "hackathon and we were awarded Nintendo Switches! ",
            skills: ["React", "JavaScript", "Tailwind CSS", "NodeJS", "ExpressJS", "MongoDB"],
        }, {
            image: SpotifyLogo,
            name: "Enhancify",
            links: [
                {
                    linkName: "GitHub",
                    link: "https://github.com/ECE49595-Team-6/EnhancifyInstall"
                }
            ],
            description: "This was my senior design project in college. I worked in a team " +
                         "to create an extension for the Spotify desktop client. Enhancify " +
                         "offers users an exciting Now Playing page and the ability to customize " +
                         "playlists. I used class-based React components to design the user interface. " +
                         "The user interface directly communicated with Spotify using web APIs. " +
                         "This was my first open source project and it received over 10 stars on GitHub " +
                         "by the end of the first week of the extension's release!",
            skills: ["TypeScript", "React", "Spotify API"], 
        }, {
            image: InstagramLogo,
            name: "Instagram Bot",
            links: [],
            description: "Instagram bot helps people gain more followers and likes. It  " +
                         "follows people on Instagram that match characteristics specified by the " +
                         "user, comments on posts, and regularly posts to keep followers updated. " +
                         "To make this tool, I used Python, Selenium, Page Object Pattern, and InstaPy. " +
                         "I plan on making this bot open source in the future so that others can use and " +
                         "contribute to the project.",
            skills: ["Python", "Selenium", "Page Object Pattern", "InstaPy", "TypeScript", "React"],
        }, {
            image: PurdueLogo,
            name: "Purdue Crime Log",
            links: [],
            description: "This is a data analysis application that aggregates Purdue's daily crime log data. " +
                         "Currently, Purdue only displays crimal activity data for crimes " +
                         "that occured in the past 60 days. New data overrides older data to maintain the " +
                         "60 day timeframe, leading to data loss. The application mitigates this issue by " +
                         "collecting data daily and storing it in a database.",
            skills: ["TypeScript", "React", "C#", "ASP.NET", "Firebase"],
        }
    ];
    return (
        <>
        <div className="projects" ref={ divRef }>
            <h2 className="section-heading">Projects</h2>
            <div className="project-cards">
                {projects.map((project) => {
                    return (
                        <ProjectCard image={project.image}
                                     name={project.name}
                                     links={project.links}
                                     description={project.description}
                                     skills={project.skills} />
                    );
                })}
            </div>
        </div>
        </>
    )
}

export default Projects;