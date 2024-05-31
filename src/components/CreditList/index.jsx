'use client'

import { oswald } from '@/app/fonts'
import Image from 'next/image'
import { useState } from 'react'
import { MdImageNotSupported } from 'react-icons/md'

const CreditList = ({ baseImgUrl, credit, title }) => {
    const [loadCredit, setLoadCredit] = useState(false)
    const limitedCredit = !loadCredit ? credit.slice(0, 12) : credit

    return (
        <div className="h-fit rounded bg-color-secondary p-6 sm:p-8">
            <h1
                className={`${oswald.className} mb-8 text-2xl font-medium md:text-3xl`}
            >
                {title}
            </h1>
            {credit.length !== 0 ? (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-2">
                    {limitedCredit.map((data) => (
                        <div
                            key={data.id}
                            className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4"
                        >
                            {data.profile_path !== null ? (
                                <Image
                                    src={`${baseImgUrl}${data.profile_path}`}
                                    alt="..."
                                    width={200}
                                    height={200}
                                    className="size-16 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex size-16 items-center justify-center rounded-full bg-color-primary">
                                    <MdImageNotSupported className="size-6" />
                                </div>
                            )}
                            <div className="text-center sm:text-start">
                                <h1 className="lg:text-lg">{data.name}</h1>
                                <p className="text-sm text-color-white/75 lg:text-base">
                                    {title == 'Casts'
                                        ? data.character
                                        : data.job}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="italic text-color-white/75">{title} not found</p>
            )}
            {credit.length > 4 && (
                <div className="mt-8 flex justify-center text-color-light-accent underline sm:text-lg">
                    <button onClick={() => setLoadCredit((prev) => !prev)}>
                        {!loadCredit ? 'See more' : 'See Less'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default CreditList
