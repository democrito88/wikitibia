import Guild from "./guild";

interface Guilds {
    world: string;
    active: Guild[];
    formation: string | null;
}

export default Guilds;