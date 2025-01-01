import BooksImage from "./../assets/books.webp";
import MoviesImage from "./../assets/movies.avif";
import GamingImage from "./../assets/gaming-2.png";

interface HobbyCardProps {
    image: string,
    name: string,
    description: string
}

function HobbyCard({ image, name, description } : HobbyCardProps) {
    return (
        <>
            <div className="hobby-card">
                <div className="hobby-card-header">
                    <div className="hobby-image-wrapper">
                        <img className="hobby-image" src={image} />
                    </div>
                    <div className="hobby-title">
                        {name}
                    </div>
                </div>
                <div className="hobby-body">
                    <p className="hobby-description">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

function Hobbies({ divRef } : { divRef: React.RefObject<HTMLDivElement> }) {

    const hobbies: HobbyCardProps[] = [
        {
            image: BooksImage, 
            name: "Reading", 
            description: "I love reading books. I started reading books in middle school after I " +
                         "moved to the U.S. Starting out, my favorite genre was fiction. Fiction " +
                         "allowed me to escape into a different world, experience a range of emotions, " +
                         "and stimulate my mind. Eventually, I got into non-fiction books. Currently, most " + 
                         "books in my reading list are non-fiction books." 
        }, {
            image: MoviesImage, 
            name: "Movies", 
            description: "I love watching movies for many of the same reasons I love reading books. " +
                         "Currently, my favorite genres are indie, science fiction, fantasy, superhero, " +
                         "bollywood, and drama. Some of my favorite movies are Avengers: Endgame, Wicked, " +
                         "Pride and Prejudice, Harry Potter series, Bend It Like Beckham, Jab We Met, The " +
                         "Help, La La Land, and Toy Story 3."
        }, {
            image: GamingImage, 
            name: "Gaming", 
            description: "I got into gaming this year. I love playing Nintendo games. They have beautiful " + 
                         "graphics and interesting storylines. Some of my favorite games are Mario Kart, Pikmin 4, " + 
                         "and Animal Crossing."
        }
    ];

    return (
        <>
            <div className="hobbies" ref={ divRef }>
                <h2 className="hobbies-header section-heading">
                    Hobbies
                </h2>
                <div className="hobbies-list">
                    {hobbies.map((hobby) => <HobbyCard image={hobby.image} name={hobby.name} description={hobby.description} />)}
                </div>
            </div>
        </>
    );
}

export default Hobbies;