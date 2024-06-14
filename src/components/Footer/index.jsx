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
        <footer className="flex flex-col gap-6 bg-color-footer p-6 sm:gap-12 md:px-20 md:py-8">
            <div className="flex flex-wrap justify-evenly gap-6 sm:gap-12 md:gap-20">
                {footerData.map((data, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h1 className="cursor-default text-base sm:text-lg">
                            {data.header}
                        </h1>
                        <div className="flex flex-col gap-2">
                            {data.contents.map((content, index) => (
                                <p
                                    key={index}
                                    className="cursor-pointer text-sm text-color-white/75 transition-colors hover:text-color-light-accent sm:text-base"
                                >
                                    {content}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex cursor-default justify-center border-t border-color-white/25 pt-6">
                <p className="text-center text-sm text-color-white/75 sm:text-base">
                    © 2024 Jovan Hermawan. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
