import React, { useState } from 'react';
import "./WorldegoryPage";
import useFetch from "../../hooks/useFetch";
import CreatureResponse from "../../types/creature/creatureResponse";
import SpellResponse from "../../types/spell/spellresponse";
import WorldResponse from "../../types/world/worldResponse";
import { Link } from 'react-router-dom';

type ApiResponse = WorldResponse | CreatureResponse | SpellResponse;

function isWorld(category: WorldResponse | CreatureResponse | SpellResponse): category is WorldResponse {
    return (category as WorldResponse).world !== undefined;
}

function isCreature(category: WorldResponse | CreatureResponse | SpellResponse): category is WorldResponse {
    return (category as CreatureResponse).creature !== undefined;
}

function isSpell(category: WorldResponse | CreatureResponse | SpellResponse): category is WorldResponse {
    return (category as SpellResponse).spell !== undefined;
}

const CategoryPage = ({category}) => {
    const [data, loading] = useFetch<ApiResponse>(category);
    const [articles, setArticle] = useState([]);

    if(loading){
        return(<p>Loading page...</p>);
    }

    if(isWorld(data)){
        setArticle(data.world);
    }

    return (
        <div className="category-main">
            <h1 className="category-title">{category} List</h1>
            <div className="category-list">
                {
                    articles.map(name => <Link to={`${category}/${name}`}>{name}</Link>)
                }
            </div>
        </div>
    );
}

export default CategoryPage;