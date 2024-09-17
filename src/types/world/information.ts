import "./apiInformation";
import "./apiStatus";

interface Information {
    api: ApiInformation;
    timestamp: string;
    status: ApiStatus;
}

export default Information;