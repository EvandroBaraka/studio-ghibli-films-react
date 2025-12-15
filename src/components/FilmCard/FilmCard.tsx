import type { Film } from "../../types/Film";

interface FilmCardProps {
    film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
    return (
        <div className="bg-cyan-950 p-3 rounded-xl flex flex-col justify-start items-center min-h-82 w-48 text-white hover:scale-105 transition-all ease-in-out">
            <img src={film.image} alt="Capa do Filme" />
            <h2 className="">
                {film.title} ({film.release_date})
            </h2>
        </div>
    );
};
