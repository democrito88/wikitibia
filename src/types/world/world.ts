import "./player";

interface World {
    name: string;
    status: string;
    players_online: number;
    record_players: number;
    record_date: string;
    creation_date: string;
    location: string;
    pvp_type: string;
    premium_only: boolean;
    transfer_type: string;
    world_quest_titles: string[];
    battleye_protected: boolean;
    battleye_date: string;
    game_world_type: string;
    tournament_world_type: string;
    online_players: Player[];
}

export default World;