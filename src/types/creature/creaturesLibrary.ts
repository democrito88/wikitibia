interface Boosted{
    name: string;
    race: string;
    image_url: string;
    featured: boolean;
}

interface CreatureSummarized{
    name: string;
    race: string;
    image_url: string;
    featured: string;
}

interface CreatureList{
    creature: CreatureSummarized[]
}

interface CreaturesLibrary{
    boosted: Boosted;
    creatureList: CreatureList;
}

export default CreaturesLibrary;