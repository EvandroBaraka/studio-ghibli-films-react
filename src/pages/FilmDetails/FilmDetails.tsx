import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmById } from "../../services/ghibliApi";
import type { Film } from "../../types/Film";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

const FilmDetails = () => {
    const { id } = useParams<{ id?: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return; // evita passar undefined para getFilmById

        let mounted = true;
        setIsLoading(true);
        setError(null);

        (async () => {
            try {
                const fetched = await getFilmById(id);
                if (mounted) setFilm(fetched ?? null);
            } catch (err) {
                if (mounted) setError("Não foi possível carregar detalhes do filme.");
                console.error("Erro ao buscar filme:", err);
            } finally {
                if (mounted) setIsLoading(false);
            }
        })();

        return () => {
            mounted = false;
        };
    }, [id]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : (film === null) ? 
                <ErrorMessage message="Filme não encontrado." />
            : (
                <div className="p-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                    <img
                        src={film?.image}
                        alt="Capa do Filme"
                        className="max-w-50 sm:max-w-max w-60 rounded-lg"
                    />
                    <div className="flex flex-col gap-2 items-start text-left">
                        <h1>
                            {film?.title} ({film?.release_date})
                        </h1>
                        <p>
                            <strong>Original Title:</strong>{" "}
                            {film?.original_title} (
                            {film?.original_title_romanised})
                        </p>
                        <p>
                            <strong>Director:</strong> {film?.director}
                        </p>
                        <p>
                            <strong>Producer:</strong> {film?.producer}
                        </p>
                        <p>
                            <strong>Running Time:</strong> {film?.running_time}{" "}
                            minutes
                        </p>
                        <p>
                            <strong>Rotten Tomatoes Score:</strong>{" "}
                            {film?.rt_score}
                        </p>
                        <p>
                            <strong>Description:</strong> {film?.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default FilmDetails;
