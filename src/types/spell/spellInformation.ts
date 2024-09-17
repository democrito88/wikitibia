interface SpellInformation {
    formula: string;
    vocation: string[];
    group_attack: boolean;
    group_healing: boolean;
    group_support: boolean;
    type_instant: boolean;
    type_rune: boolean;
    damage_type: string;
    cooldown_alone: number;
    cooldown_group: number;
    soul_points: number;
    amount: number;
    level: number;
    mana: number;
    price: number;
    city: string[];
    premium_only: boolean;
}

export default SpellInformation;