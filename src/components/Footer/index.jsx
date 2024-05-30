import { oswald } from '@/app/fonts'
import Image from 'next/image'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
    const footerData = [
        {
            header: 'Quick Links',
            contents: ['Home', 'Movies', 'Genres', 'Search', 'Collections'],
        },
        {
            header: 'Information',
            contents: [
                'About Us',
                'Services',
                'Careers',
                'Privacy Policy',
                'Terms of Service',
            ],
        },
        {
            header: 'Contact Us',
            contents: ['seename@gmail.com', '(123) 456-7890'],
        },
    ]

    return (
        <footer className="flex flex-col gap-12 bg-color-footer p-6 py-8 md:px-20">
            <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
                <Image
                    src={'/Logo.svg'}
                    alt="..."
                    width={500}
                    height={500}
                    className="w-48 sm:w-60 md:w-80 xl:w-[500px]"
                />
                <div className="flex w-full flex-wrap justify-center gap-12 sm:flex-nowrap sm:gap-20 xl:w-fit xl:justify-end">
                    {footerData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h1 className="cursor-default text-lg">
                                {data.header}
                            </h1>
                            <div className="flex flex-col gap-2">
                                {data.contents.map((content) => (
                                    <p
                                        key={index}
                                        className="cursor-pointer text-color-white/75"
                                    >
                                        {content}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-color-white/25 pt-6 sm:flex-row">
                <p className="text-center text-color-white/75">
                    © 2024 Jovan Hermawan. All rights reserved.
                </p>
                <div className="flex items-center gap-8 text-xl">
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaYoutube />
                    <FaTiktok />
                </div>
            </div>
        </footer>
    )
}

export default Footer
