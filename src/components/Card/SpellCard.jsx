import React from "react";
import Card from ".";

const SpellCard = (props) => {
    return(
        <Card>
            <img className="card-img" src={props.data?.image_url} alt={props.data.name} />
            <p>{props.data.description}</p>
            {props.data?.has_spell_information ?
            <ul>
                <li>
                   Formula: {props.data?.spell_information.formula}
                </li>
                <li>
                   Who can use it? <ul>{props.data?.spell_information.vocation.map((voc, index) => <li key={index}>{voc}</li>)}</ul>
                </li>
                <li>
                   <small className="badge" >{props.data?.spell_information.group_attack ? 'Attack' : (props.data?.spell_information.group_healing ? 'Healing' : 'Support' ) }</small>
                </li>
                <li>
                   <small className="badge" >{props.data?.spell_information.type_instant ? 'Instant' : (props.data?.spell_information.type_rune ? 'Rune' : '' ) }</small>
                </li>
                <li>
                   Damage Type: {props.data?.spell_information.damage_type}
                </li>
                <li>
                   Alone Cooldown Time: {props.data?.spell_information.cooldown_alone}
                </li>
                <li>
                   Group Cooldown Time: {props.data?.spell_information.cooldown_group}
                </li>
                <li>
                   Soul points: {props.data?.spell_information.soul_points}
                </li>
                <li>
                   Amount of mana: {props.data?.spell_information.amount}
                </li>
                <li>
                   Min. level necessary: {props.data?.spell_information.level}
                </li>
                <li>
                   Mana spelled: {props.data?.spell_information.mana}
                </li>
                <li>
                   Price: {props.data?.spell_information.price}
                </li>
                <li>
                   Cities: <ul>{props.data?.spell_information.city.map((c, index) => <li key={index}>{c}</li>)}</ul>
                </li>
                <li>
                   Premium exclusive: {props.data?.spell_information.premium_only}
                </li>
            </ul>
            : "Sorry. No information was founded."}
        </Card>
    );
}

export default SpellCard;