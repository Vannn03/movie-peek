import LoopCarousel from '@/components/Carousel/LoopCarousel'
import TrendingCarousel from '@/components/Carousel/TrendingCarousel'
import { oswald } from './fonts'

const Home = () => {
    const baseImgUrl = process.env.NEXT_PUBLIC_API_BASE_IMG_URL

    return (
        <main className="bg-color-primary">
            {/* TRENDING */}
            <section>
                <TrendingCarousel
                    baseImgUrl={baseImgUrl}
                    resource={'trending/movie/week'}
                />
            </section>
            {/* Recommended */}
            <section className="px-6 py-12 sm:px-12">
                <h1
                    className={`${oswald.className} mb-6 text-2xl font-medium sm:text-3xl lg:text-4xl`}
                >
                    Recommended Movies
                </h1>
                <LoopCarousel
                    baseImgUrl={baseImgUrl}
                    resource={'movie/popular'}
                />
            </section>
            {/* Top Rated */}
            <section className="px-6 py-12 sm:px-12">
                <h1
                    className={`${oswald.className} mb-6 text-2xl font-medium sm:text-3xl lg:text-4xl`}
                >
                    Best Movies of All Time
                </h1>
                <LoopCarousel
                    baseImgUrl={baseImgUrl}
                    resource={'movie/top_rated'}
                />
            </section>
        </main>
    )
}

export default Home
