import React from 'react';
import "./CategoryPage.css";
import useFetch from "../../hooks/useFetch";
import Creatures from "../../types/creature/creatures";
import Spells from "../../types/spell/spellresponse";
import {Worlds, WorldSummarized} from "../../types/world/worlds";
import { Link, useParams } from 'react-router-dom';
import Card from "../../components/Card";
import { BiSolidCircle } from "react-icons/bi";

type ApiResponse = Worlds | Creatures | Spells;

function isWorld(category: Worlds | Creatures | Spells | null): category is Worlds {
    return (category as Worlds).worlds !== undefined;
}

function isCreature(category: Worlds | Creatures | Spells | null): category is Worlds {
    return (category as Creatures).creatures !== undefined;
}

function isSpell(category: Worlds | Creatures | Spells | null): category is Worlds {
    return (category as Spells).spells !== undefined;
}

const groupWorldByContinent = (data: WorldSummarized[]): Record<string, WorldSummarized[]> => {
    return data.reduce((groupedData, item) => {
      const groupKey = item['location'];
      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }
      groupedData[groupKey].push(item);
      return groupedData;
    }, {} as Record<string, WorldSummarized[]>);
};

const CategoryPage = () => {
    const {category} = useParams<{ category: string | undefined; }>();
    if(category != undefined){
        const [data, loading] = useFetch<ApiResponse | null>(category);
    
        if(loading){
            return(<p>Loading page...</p>);
        }
    
        if(isCreature(data)){
            return (
                <div className="category-main">
                    <h1 className="category-title">{category} catalog</h1>
                    <div className="category-list">
                        {
                            data?.creatures?.creature_list.map((creature, index) => 
                                <Link to={`../creature/${creature.name}`} >
                                    <Card key={index}>
                                        <img className='card-img' src={creature.image_url} alt={creature.name}/>
                                        <div className='article-card-body'>
                                            <h5>{creature.name}</h5>
                                        </div>
                                    </Card>
                                </Link>)
                        }
                    </div>
                </div>
            );
        }

        if(isWorld(data)){
            const groupedWorlds = groupWorldByContinent(data.worlds.regular_worlds);
            return (
                <div className="category-main">
                    <h1 className="category-title">{category} catalog</h1>
                    <div className="">
                    {Object.entries(groupedWorlds).map(([location, worlds]) => (
                        <>
                            <h4>{location}</h4>
                            <div className='category-list'>
                                {worlds.map((world, index) => 
                                    <Card key={index}>
                                        <div className='article-card-body'>
                                            <Link to={`../world/${world.name}`} >
                                                <h5>{world.name}</h5>
                                            </Link>
                                            {world.status == "online" ? 
                                            <p className='text-green'><BiSolidCircle />active</p> 
                                            : 
                                            <p className='text-red'><BiSolidCircle /> offline</p>}
                                            <small>{world.players_online} online now</small><br/>
                                            <small>{world.pvp_type}</small>
                                        </div>
                                    </Card>
                                )}
                            </div>
                        </>
                    ))}
                    </div>
                </div>
            );
        }

        if(isSpell(data)){
            return (
                <div className="category-main">
                    <h1 className="category-title">{category} catalog</h1>
                    <div className="category-list">
                        {
                            data?.spells?.spell_list.map((spell, index) => 
                                <Link key={index} to={`../spell/${spell.name}`} >
                                    <Card>
                                        <div className='article-card-body'>
                                            <h5>{spell.name}</h5>
                                        </div>
                                    </Card>
                                </Link>)
                        }
                    </div>
                </div>
            );
        }
    }
}

export default CategoryPage;