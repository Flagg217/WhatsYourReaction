import data from './data.json';
import image from '../assets/images/RecipeConcierge.jpg';

function Project() {
    const fontColor = "white";
    return (
        <div>
            <div style={{ color: fontColor }}>
                {data.map((item) => (
                    <div>
                        <br />
                        {item.title}
                        <br />
                        <img
                        src={item.img}
                        alt={item.description}
                        style={{ width: "300px", height: "200px" }}
                        />
                        <br />
                        <a href={item.githubLink}>GitHub Link</a>
                        <br />
                        <a href={item.deployedLink}>Deployed Link</a>
                        </div>
                ))}
        </div>
        </div>
    );
}

export default Project;