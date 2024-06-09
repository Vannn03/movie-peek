import LoopCarousel from '@/components/Carousel/LoopCarousel'
import TrendingCarousel from '@/components/Carousel/TrendingCarousel'
import { oswald } from './fonts'
import { getMovieResponse } from '@/libs/api-libs'

const Home = async () => {
    const trending = await getMovieResponse('trending/movie/week', 'page=1')
    const popular = await getMovieResponse('movie/popular', 'page=1')
    const topRated = await getMovieResponse('movie/top_rated', 'page=1')
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL

    const subTitle = (name) => (
        <h1
            className={`${oswald.className} mb-6 text-2xl font-medium sm:text-3xl lg:text-4xl`}
        >
            {name}
        </h1>
    )

    return (
        <main className="bg-color-primary">
            {/* TRENDING */}
            <section>
                <TrendingCarousel
                    baseImgUrl={baseImgUrl}
                    results={trending.results}
                />
            </section>
            {/* Recommended */}
            <section className="px-6 py-12 sm:px-12">
                {subTitle('Recommended Movies')}
                <LoopCarousel
                    baseImgUrl={baseImgUrl}
                    results={popular.results}
                />
            </section>
            {/* Top Rated */}
            <section className="px-6 py-12 sm:px-12">
                {subTitle('Top Rated Movies')}
                <LoopCarousel
                    baseImgUrl={baseImgUrl}
                    results={topRated.results}
                />
            </section>
        </main>
    )
}

export default Home
