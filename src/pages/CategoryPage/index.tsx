import React, { useState } from 'react';
import "./CategoryPage.css";
import useFetch from "../../hooks/useFetch";
import CreatureResponse from "../../types/creature/creatureResponse";
import SpellResponse from "../../types/spell/spellresponse";
import WorldResponse from "../../types/world/worldResponse";
import { Link, useParams } from 'react-router-dom';

type ApiResponse = WorldResponse | CreatureResponse | SpellResponse;

function isWorld(category: WorldResponse | CreatureResponse | SpellResponse | null): category is WorldResponse {
    return (category as WorldResponse).world !== undefined;
}

function isCreature(category: WorldResponse | CreatureResponse | SpellResponse | null): category is WorldResponse {
    return (category as CreatureResponse).creature !== undefined;
}

function isSpell(category: WorldResponse | CreatureResponse | SpellResponse | null): category is WorldResponse {
    return (category as SpellResponse).spell !== undefined;
}

const CategoryPage = () => {
    const {category} = useParams<{ category: string | undefined; }>();
    if(category != undefined){
        const [data, loading] = useFetch<ApiResponse | null>(category);
        const [articles, setArticle] = useState([]);
    
        if(loading){
            return(<p>Loading page...</p>);
        }
    
        if(isWorld(data)){
            setArticle(data.worlds);
        }
    
        return (
            <div className="category-main">
                <h1 className="category-title">{category} List</h1>
                <div className="category-list">
                    {
                        articles.regular_worlds.map(name => <Link to={`${category}/${name}`}>{name}</Link>)
                    }
                </div>
            </div>
        );
    }
}

export default CategoryPage;