interface Creature {
    name: string;
    race: string;
    image_url: string;
    description: string;
    behaviour: string;
    hitpoints: number;
    immune: string[];
    strong: string[];
    weakness: string[];
    healed: number | null;
    be_paralysed: boolean;
    be_summoned: boolean;
    summoned_mana: number;
    be_convinced: boolean;
    convinced_mana: number;
    see_invisible: boolean;
    experience_points: number;
    is_lootable: boolean;
    loot_list: string[];
    featured: boolean;
}

export default Creature;