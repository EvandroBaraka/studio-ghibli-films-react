import type { Film } from "../types/Film"

export const sortFilms = (films: Film[]): Film[] => {
    const sortedFilm = films.sort((a, b) => a.title.localeCompare(b.title));
    return sortedFilm
}