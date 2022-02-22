
export interface Properties {
    accuracy: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Context {
    id: string;
    text: string;
    wikidata: string;
    short_code: string;
}

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text: string;
    place_name: string;
    center: number[];
    geometry: Geometry;
    context: Context[];
    address: string;
}

export interface SearchRes {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
}
