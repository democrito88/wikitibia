import Card from ".";
import GuildsList from "../Guilds";

const WorldCard = (props) => {

    if (props.data === undefined) {
        return <p><b>404</b> | Data not found</p>
    }

    return (
        <>
            <Card>
                <ul className="article-card-list">
                    <li>
                        status:
                        <b>{props.data?.status}</b>
                    </li>
                    <li>
                        Medium of simultaneous players:
                        <b>{props.data?.players_online}</b>
                    </li>
                    <li>
                        Maximum simultaneous players registered:
                        <b>{`${props.data?.record_players} (in ${props.data?.record_date})`}</b>
                    </li>
                    <li>
                        Active since:
                        <b>{props.data?.creation_date}</b>
                    </li>
                    <li>
                        Location:
                        <b>{props.data?.location}</b>
                    </li>
                    <li>
                        Type of PVP:
                        <b>{props.data?.pvp_type}</b>
                    </li>
                    <li>
                        Only for buyers?
                        <b>{props.data?.premium_only ? 'yes' : 'no'}</b>
                    </li>
                    <li>
                        Type of transfer:
                        <b>{props.data?.transfer_type}</b>
                    </li>
                    <li>
                        Quests:
                        <ul className="article-card-list">
                            {props.data?.world_quest_titles.map((quest, index) => <li key={index}>{quest}</li>)}
                        </ul>
                    </li>
                    <li>
                        Protected?
                        <b>{props.data?.battleye_protected ? `yes (since ${props.data?.battleye_date})` : 'no'}</b>
                    </li>
                    <li>
                        Type of world:
                        <b>{props.data?.game_world_type}</b>
                    </li>
                    <li>
                        Type of tournament:
                        <b>{props.data?.tournament_world_type}</b>
                    </li>
                    <li>
                        Players:
                        <ul className="article-card-list">
                            {props.data?.online_players.map((player, index) =>
                                <li key={index}>
                                    <b>{`${player?.name}`}</b>
                                    {` (${player?.vocation}, lvl ${player?.level})`}</li>
                            )}
                        </ul>
                    </li>
                </ul>
            </Card>
            <GuildsList name={props.data?.name} />
        </>
    );
}

export default WorldCard;