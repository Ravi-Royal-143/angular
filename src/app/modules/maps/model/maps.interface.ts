
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


export interface Admin {
    iso_3166_1_alpha3: string;
    iso_3166_1: string;
}

export interface MapboxStreetsV8 {
    class: string;
}

export interface Intersection {
    entry: boolean[];
    bearings: number[];
    duration: number;
    mapbox_streets_v8: MapboxStreetsV8;
    is_urban: boolean;
    admin_index: number;
    out: number;
    weight: number;
    geometry_index: number;
    location: number[];
    in?: number;
    turn_weight?: number;
    turn_duration?: number;
}

export interface Maneuver {
    type: string;
    instruction: string;
    bearing_after: number;
    bearing_before: number;
    location: number[];
    modifier: string;
    exit?: number;
}

export interface GeometryData {
    coordinates: number[][];
    type: string;
}

export interface Step {
    intersections: Intersection[];
    maneuver: Maneuver;
    name: string;
    duration: number;
    distance: number;
    driving_side: string;
    weight: number;
    mode: string;
    geometry: GeometryData;
    ref: string;
    rotary_name: string;
}

export interface Leg {
    via_waypoints: any[];
    admins: Admin[];
    weight: number;
    duration: number;
    steps: Step[];
    distance: number;
    summary: string;
}

export interface Geometry2 {
    coordinates: number[][];
    type: string;
}

export interface Route {
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
    legs: Leg[];
    geometry: Geometry2;
}

export interface Waypoint {
    distance: number;
    name: string;
    location: number[];
}

export interface DirectionRes {
    routes: Route[];
    waypoints: Waypoint[];
    code: string;
    uuid: string;
}
