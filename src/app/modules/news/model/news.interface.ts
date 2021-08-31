
export interface NewsApiRes {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface CountryDetails {
    country: string;
    countryKey: string;
}

export interface KeyVal {
    key: string;
    value: string;
}