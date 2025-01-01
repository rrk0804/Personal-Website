function Skills( { divRef } : { divRef: React.RefObject<HTMLDivElement> } ) {
    const skills = ["Java", "Python", "C#", "JavaScript", "TypeScript", "C", 
                    "C++", "SQL", "Tableau", "React", "Angular", "NodeJS", 
                    "ExpressJS", "ASP.NET", "Selenium"];
    return (
        <>  
            <div ref={ divRef } className="skills">
                <h2 className="section-heading">Skills</h2> 
                <div className="skills-list">
                    {skills.map((skill) => <div className="skill"> {skill} </div>)}
                </div>
            </div>
        </>
    );
}

export default Skills;