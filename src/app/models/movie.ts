export interface Movie {
    id: string;
    name: string;
    description: string;
    genre: string;
    director: string;
    actors: string[];
    type: MovieType;
    posterUri?: string;
}

export enum MovieType {
    movie = "movie",
    series = "series"
}