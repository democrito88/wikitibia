interface News{
    id: number;
    date: string;
    title: string;
    category: string;
    url: string;
    content: string;
    content_html: string;
}

interface Api{
    version: number;
    release: string;
    commit: string;
    timestamp: string;
}

interface Status{
    http_code: number;
}

interface Information{
    api: Api;
    status: Status;
}

interface New{
    news: News;
    information: Information;
}

export {News, New};