export const getMovieResponse = async (resource, query) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    const movie = await res.json()

    return movie
}
