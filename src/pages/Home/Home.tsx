import { useState, useEffect } from "react";
import type { Film } from "../../types/Film";
import { getFilms } from "../../services/ghibliApi";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { Link } from "react-router-dom";
import { sortFilms } from "../../utils/sortFilms";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

const Home = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        setIsLoading(true);
        setError(null);

        (async () => {
            try {
                const fetched = await getFilms();
                const sorted = sortFilms(fetched);
                if (mounted) setFilms(sorted);
            } catch (err) {
                if (mounted)
                    setError("Não foi possível carregar a lista de filmes.");
                console.error("Erro ao buscar filmes:", err);
            } finally {
                if (mounted) setIsLoading(false);
            }
        })();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : films.length === 0 ? (
                <ErrorMessage message="Nenhum filme encontrado." />
            ) : (
                <>
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">Films List</h1>
                    <ul className="flex flex-wrap gap-4 justify-center items-center">
                        {films?.map((film) => (
                            <li key={film.id}>
                                <Link to={`/films/${film.id}`}>
                                    <FilmCard film={film} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default Home;
