import Information from "./information";

interface WorldSummarized{
    name: string;
    status: string;
    players_online: number;
    location: string;
    pvp_type: string;
    premium_only: boolean;
    transfer_type: string;
    battleye_protected: boolean;
    battleye_date: string;
    game_world_type: string;
    tournament_world_type: string;
}

interface Worlds{
    players_online: number;
    record_players: number;
    record_date: string;
    regular_worlds: WorldSummarized[]
    tournament_worlds: string | null;
}

interface Worlds{
    worlds: Worlds;
    information: Information;
}

export {WorldSummarized, Worlds};