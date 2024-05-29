import MovieGridList from '@/components/MovieGridList'
import SearchBar from '@/components/SearchBar'
import { getMovieResponse } from '@/libs/api-libs'

const Page = async () => {
    const { results } = await getMovieResponse('/discover/movie', '')

    return (
        <div className="bg-color-primary p-8">
            <SearchBar />
            <MovieGridList results={results} />
        </div>
    )
}

export default Page
