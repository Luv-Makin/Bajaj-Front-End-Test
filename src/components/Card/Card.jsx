import "../../styles/cards.css"

const Card = ({ name, link, type, image_link }) => {
    const defaultURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_383214.png&f=1&nofb=1";
    return (
        <div className="card_container">
            <section className="title">
                <p>
                    <span>{name}</span>
                </p>
            </section>
            <section className="image">
                <figure>
                    <img src={(image_link === "" || image_link === null) ? defaultURL : image_link} alt={`${name} avatar not found`} />
                </figure>
            </section>
            <section className="content">
                <span>{type}</span>
                <a href={link}>Learn more</a>
            </section>

        </div>
    )
}


export default Card