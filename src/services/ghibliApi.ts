export const getFilms = async () => {
    const response = await fetch('https://ghibliapi.vercel.app/films/?limit=10')
    return await response.json()
}

export const getFilmById = async (id: string) => {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`)

    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
        throw new Error("Erro na requisição");
    }

    return await response.json()
}