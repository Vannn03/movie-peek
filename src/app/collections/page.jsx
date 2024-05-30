import { oswald } from '../fonts'

const Page = () => {
    return (
        <div className="flex h-[74.2dvh] items-center justify-center bg-color-primary text-center">
            <p
                className={`${oswald.className} text-7xl font-semibold sm:text-8xl`}
            >
                COMING
                <span className="text-color-light-accent"> SOON</span>
            </p>
        </div>
    )
}

export default Page
