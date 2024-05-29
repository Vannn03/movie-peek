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

    return (
        <main className="bg-color-primary">
            <Image
                src={'/Rectangle 1.svg'}
                alt="..."
                width={200}
                height={200}
                className="absolute right-0 top-0 w-full"
            />
            {/* HERO */}
            <section className="flex h-dvh items-center justify-center">
                <div className="z-40 text-center">
                    <h1
                        className={`${oswald.className} text-8xl font-bold uppercase`}
                    >
                        satisfy your{' '}
                        <span className="text-color-light-accent">
                            curiosity
                        </span>
                    </h1>
                    <p
                        className={`${oswald.className} mx-auto mt-8 w-[800px] text-3xl text-color-white/75 `}
                    >
                        Step into a realm of boundless entertainment where the
                        magic of cinema awaits at your fingertips
                    </p>

                    <div className="mx-auto mt-20 flex w-[900px] gap-4">
                        <button className="w-1/4 cursor-not-allowed rounded bg-color-light-accent px-12 py-4 text-xl font-medium uppercase tracking-wide opacity-50">
                            Sign up
                        </button>
                        <SearchBar />
                    </div>
                </div>
            </section>

            {/* MOVIE TRENDS */}
            <section className="p-20">
                <div className="flex flex-col items-center">
                    <h1
                        className={`${oswald.className} z-40 text-center text-6xl font-semibold`}
                    >
                        Discover the Latest Movie Trends
                    </h1>

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
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-color-accent px-12 py-4 text-xl font-medium uppercase tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                            Discover now
                        </Link>
                    </div>
                </div>
            </section>

            {/* GENRES*/}
            <section className="p-20">
                <div className="flex flex-col items-center">
                    <h1
                        className={`${oswald.className} z-40 text-center text-6xl font-semibold`}
                    >
                        Choose Your Favorite Genres
                    </h1>

                    <div className="z-40 mt-20 grid grid-cols-5 gap-8">
                        {genres.map((data, index) => (
                            <div
                                key={data.id}
                                className="flex items-center justify-between gap-4 rounded-xl bg-color-secondary px-4 py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-lg bg-color-primary p-4 text-2xl text-color-light-accent">
                                        {genreIconData[index]}
                                    </div>
                                    <p className="text-lg">{data.name}</p>
                                </div>
                                <Link
                                    href={`/genres/${data.id}/${data.name.toLowerCase()}`}
                                >
                                    <FaArrowRight className="text-xl" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="p-20 pb-40">
                <div className="flex flex-col items-center">
                    <h1
                        className={`${oswald.className} z-40 text-center text-6xl font-semibold`}
                    >
                        Best Features For You
                    </h1>

                    <div className="z-40 mt-20 grid grid-cols-3 gap-20">
                        {featureData.map((data, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="text-4xl text-color-accent">
                                    {data.url_icon}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1
                                        className={`text-3xl font-medium ${oswald.className}`}
                                    >
                                        {data.name}
                                    </h1>
                                    <p className="text-xl text-color-white/75">
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
