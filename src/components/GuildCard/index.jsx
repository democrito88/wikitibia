import "./Guild.css";
import Card from "../Card";

const GuildCard = (props) => {
    return(
      <Card>
        <img className="card-img" src={props.guild.logo_url} alt={props.guild.name} />
        <div className="article-card-body">
            <h4>{props.guild.name}</h4>
            <p>{props.guild.description}</p>
        </div>
      </Card>
    );
}

export default GuildCard;