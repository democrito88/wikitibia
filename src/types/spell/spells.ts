import Information from "./information";

interface SpellSummarized{
    name: string;
    spell_id: string;
    formula: string;
    level: number;
    mana: number;
    price: number;
    group_attack : boolean;
    group_healing : boolean;
    group_support : boolean;
    type_instant : boolean;
    type_rune : boolean;
    premium_only: boolean;
}

interface SpellsList{
    spells_filter: string;
    spell_first: SpellSummarized[]
}

interface Spells{
    spells: SpellsList;
    information: Information;
}

export default Spells;