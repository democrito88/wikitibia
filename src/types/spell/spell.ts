import SpellInformation from "./spellInformation";
import RuneInformation from "./runeInformation";

interface Spell {
  name: string;
  spell_id: string;
  image_url: string;
  description: string;
  has_spell_information: boolean;
  spell_information: SpellInformation | null;
  has_rune_information: boolean;
  rune_information: RuneInformation | null;
}

export default Spell;