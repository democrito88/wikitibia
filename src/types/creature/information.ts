import ApiInformation from "./apiInformation";
import ApiStatus from "./apiStatus";

interface Information {
    api: ApiInformation;
    timestamp: string;
    status: ApiStatus;
}

export default Information;