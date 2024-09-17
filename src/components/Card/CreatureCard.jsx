import Card from ".";

const CreatureCard = (props) => {
    return (
        <Card>
            <img
                className="card-img"
                src={props.data?.image_url}
                alt={props.data?.name} />
            <div className="article-card-body">
                <ul className="article-card-list">
                    <li>
                        race:
                        <b>{props.data?.race}</b>
                    </li>
                    <li>
                        description:
                        <b>{props.data?.description}</b>
                    </li>
                    <li>
                        behaviour:
                        <b>{props.data?.behaviour}</b>
                    </li>
                    <li>
                        <b>{`${props.data?.hitpoints}HP`}</b>
                    </li>
                    <li>
                        immune to:
                        <ul className="article-card-list">{props.data?.immune?.map((type, index) => <li key={index}>{type}</li>)}</ul>
                    </li>
                    <li>
                        resistant to:
                        <ul className="article-card-list">{props.data?.strong?.map((type, index) => <li key={index}>{type}</li>)}</ul>
                    </li>
                    <li>
                        weak to:
                        <ul className="article-card-list">{props.data?.weakness?.map((type, index) => <li key={index}>{type}</li>)}</ul>
                    </li>
                    <li>
                        Healed:
                        <b>{props.data?.healed ? props.data?.healed : 'no'}</b>
                    </li>
                    <li>
                        Can be paralised?
                        <b>{props.data?.be_paralysed ? 'yes' : 'no'}</b>
                    </li>
                    <li>
                        Can be summoned?
                        <b>{props.data?.be_summoned ? `yes (by ${props.data?.summoned_mana} mana points)` : 'no'}</b>
                    </li>
                    <li>
                        Can be convinced?
                        <b>{props.data?.be_convinced ? `yes (by ${props.data?.convinced_mana} mana points)` : 'no'}</b>
                    </li>
                    <li>
                        Can see you if you're inivisible?
                        <b>{props.data?.see_invisible ? 'yes' : 'no'}</b>
                    </li>
                    <li>
                        Amount of XP:
                        <b>{props.data?.experience_points}</b>
                    </li>
                    {props.data?.is_lootable ?

                        <li>
                            <p>Loot</p>
                            <ul className="article-card-list">
                                {props.data?.loot_list?.map((loot, index) => <li key={index}>{loot}</li>)}
                            </ul>
                        </li>
                        :
                        <li>Doesn't give any loot</li>
                    }
                    <li>
                        Featured:
                        <b>{props.data?.featured ? 'yes' : 'no'}</b>
                    </li>
                </ul>
            </div>
        </Card>
    );
}

export default CreatureCard;