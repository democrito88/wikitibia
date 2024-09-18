import React from "react";
import useFetch from "../../hooks/useFetch";
import Guilds from "../../types/guild/guilds";
import GuildCard from "../GuildCard";
import "./Guilds.css";

const GuildsList = ({ name }) => {

    const [data, loading] = useFetch<[Guilds, boolean]>(`guilds/${name}`);

    if (loading) {
        return (
            <div>
                <p>Carregando...</p>
            </div>);
    }

    return (
        <>
            <hr />
            <h3>Guilds</h3>
            <div className="guilds">
                {data?.guilds?.active.map((guild, index) => <GuildCard key={index} guild={guild} />)}            
            </div>
        </>
    );
};

export default GuildsList;