import React, { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import WorldResponse from "../../types/world/worldResponse";
import CreatureResponse from "../../types/creature/creatureResponse";
import SpellResponse from "../../types/spell/spellResponse";
import Creature from "../../types/creature/creature";
import Spell from "../../types/spell/spell";
import CreatureCard from "../../components/Card/CreatureCard";
import WorldCard from "../../components/Card/WorldCard";
import SpellCard from "../../components/Card/SpellCard";

type ApiResponse = WorldResponse | CreatureResponse | SpellResponse;

const formatUrl = (url: string | undefined) => {
    if (url === undefined) {
        return "";
    }
    switch (url) {
        case 'creatures':
            return 'creature';
            break;
        case 'worlds':
            return 'world';
            break;
        case 'spells':
            return 'spell';
            break;

        default:
            return "";
            break;
    }
}

const isCreature = (obj: any): obj is Creature => {
    return 'creature' in obj && 'information' in obj;
}

const isSpell = (obj: any): obj is Spell => {
    return 'spell' in obj && 'information' in obj;
}

const Article = () => {
    const { classList, name } = useParams<{ classList: string | undefined; name: string }>();

    const [data, loading] = useFetch<[ApiResponse, boolean]>(`${formatUrl(classList)}/${name?.toLowerCase()}`);

    if (loading) {
        return (
            <div>
                <p>Carregando...</p>
            </div>);
    }

    return (
        <div>
            <h1>{name}</h1>
            {isCreature(data) ?
                <CreatureCard data={data?.creature} />
                :
                (isSpell(data) ?
                    <SpellCard data={data?.spell} />
                    :
                    <WorldCard data={data?.world} />
                )}
        </div>
    );
}

export default Article;