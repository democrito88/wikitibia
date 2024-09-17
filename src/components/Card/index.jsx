import "./Card.css";

const Card = ({children}) => {
    return(
        <div className="article-card">
            {children}
        </div>
    )
}

export default Card;