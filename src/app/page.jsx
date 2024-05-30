import Image from 'next/image'
import { oswald } from './fonts'
import { IoTv } from 'react-icons/io5'
import {
    GiCrimeSceneTape,
    GiCupidonArrow,
    GiDramaMasks,
    GiHeartBeats,
    GiNuclearBomb,
    GiPistolGun,
    GiWesternHat,
} from 'react-icons/gi'
import {
    FaArrowRight,
    FaBook,
    FaClipboardQuestion,
    FaGhost,
    FaMusic,
    FaPersonWalkingLuggage,
    FaWandSparkles,
} from 'react-icons/fa6'
import {
    MdAnimation,
    MdFamilyRestroom,
    MdHistoryEdu,
    MdOutlineTheaterComedy,
    MdScience,
    MdTypeSpecimen,
} from 'react-icons/md'
import Link from 'next/link'
import { TbMovie } from 'react-icons/tb'
import { BiSolidCollection } from 'react-icons/bi'
import SearchBar from '@/components/SearchBar'
import { getMovieResponse } from '@/libs/api-libs'

const Home = async () => {
    const { genres } = await getMovieResponse('/genre/movie/list', '')
    const genreIconData = [
        <GiPistolGun key="0" />,
        <FaPersonWalkingLuggage key="1" />,
        <MdAnimation key="2" />,
        <MdOutlineTheaterComedy key="3" />,
        <GiCrimeSceneTape key="4" />,
        <FaBook key="5" />,
        <GiDramaMasks key="6" />,
        <MdFamilyRestroom key="7" />,
        <FaWandSparkles key="8" />,
        <MdHistoryEdu key="9" />,
        <FaGhost key="10" />,
        <FaMusic key="11" />,
        <FaClipboardQuestion key="12" />,
        <GiCupidonArrow key="13" />,
        <MdScience key="14" />,
        <IoTv key="15" />,
        <GiHeartBeats key="16" />,
        <GiNuclearBomb key="17" />,
        <GiWesternHat key="18" />,
    ]

    const featureData = [
        {
            url_icon: <TbMovie />,
            name: 'Cinematic Showcase',
            description:
                'Get comprehensive movie information, including plot summaries, cast and crew details, and reviews',
        },
        {
            url_icon: <MdTypeSpecimen />,
            name: 'Genre Explorer',
            description:
                'Find the perfect movie for your mood, from action and comedies to dramas and horrors.',
        },
        {
            url_icon: <BiSolidCollection />,
            name: 'Personal Collections',
            description:
                'Build and curate your own movie library, making it easy to revisit your top picks anytime',
        },
    ]

    const subTitle = (title) => (
        <h1
            className={`${oswald.className} z-40 text-center text-4xl font-semibold md:text-5xl xl:text-6xl`}
        >
            {title}
        </h1>
    )

    const button = (name, customCSS) => (
        <button
            className={`${customCSS} rounded px-12 py-4 font-medium uppercase tracking-wide md:text-lg xl:text-xl`}
        >
            {name}
        </button>
    )

    return (
        <main className="bg-color-primary">
            <Image
                src={'/Rectangle 1.svg'}
                alt="..."
                width={200}
                height={200}
                className="absolute right-0 top-0 flex h-full w-full md:h-fit"
            />
            {/* HERO */}
            <section className="flex h-dvh items-center justify-center px-6 md:px-12 xl:px-20">
                <div className="z-40 text-center">
                    <h1
                        className={`${oswald.className} text-3xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
                    >
                        satisfy your{' '}
                        <span className="text-color-light-accent">
                            curiosity
                        </span>
                    </h1>
                    <p
                        className={`${oswald.className} mx-auto mt-4 text-lg text-color-white/75 sm:mt-8 sm:text-2xl xl:text-3xl `}
                    >
                        Step into a realm of boundless entertainment where the
                        magic of cinema awaits at your fingertips
                    </p>

                    <div className="mx-auto mt-12 flex justify-center gap-4 sm:mt-20">
                        {button(
                            'Sign up',
                            'cursor-not-allowed opacity-50 bg-color-light-accent sm:flex hidden'
                        )}
                        <SearchBar
                            customWidth={
                                'w-full sm:w-[400px] lg:w-[600px] xl:w-[750px]'
                            }
                        />
                    </div>
                </div>
            </section>

            {/* MOVIE TRENDS */}
            <section className="px-6 py-20 md:px-12 xl:p-20">
                <div className="flex flex-col items-center">
                    {subTitle('Discover the Latest Movie Trends')}

                    <div className="group relative">
                        <Image
                            src={'/Movie Photos.svg'}
                            alt="..."
                            width={200}
                            height={200}
                            className="w-fit transition-all hover:blur"
                        />

                        <Link
                            href={'movies'}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                            {button('Discover now', 'bg-color-accent')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* GENRES*/}
            <section className="px-6 py-20 md:px-12 xl:p-20">
                <div className="flex flex-col items-center">
                    {subTitle('Choose Your Favorite Genres')}

                    <div className="z-40 mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:mt-20 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5">
                        {genres.map((data, index) => (
                            <div
                                key={data.id}
                                className="flex flex-col justify-between gap-4 rounded-xl bg-color-secondary p-4 lg:flex-row lg:items-center"
                            >
                                <div className="flex flex-col items-center gap-4 sm:flex-row">
                                    <div className="rounded-lg bg-color-primary p-4 text-xl text-color-light-accent lg:text-2xl">
                                        {genreIconData[index]}
                                    </div>
                                    <p className="overflow-hidden md:text-lg">
                                        {data.name}
                                    </p>
                                </div>
                                <Link
                                    href={`/genres/${data.id}/${data.name.toLowerCase()}`}
                                    className="flex justify-end"
                                >
                                    <FaArrowRight className="text-xl" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-6 pb-40 pt-20 md:px-12 xl:p-20">
                <div className="flex flex-col items-center">
                    {subTitle('Best Features For You')}

                    <div className="z-40 mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3 xl:mt-20 xl:gap-20">
                        {featureData.map((data, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-6 lg:flex-row lg:items-start"
                            >
                                <div className="text-4xl text-color-accent">
                                    {data.url_icon}
                                </div>
                                <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-start">
                                    <h1
                                        className={`text-2xl font-medium md:text-3xl ${oswald.className}`}
                                    >
                                        {data.name}
                                    </h1>
                                    <p className="text-lg text-color-white/75 md:text-xl">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
