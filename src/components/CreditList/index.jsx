'use client'

import { oswald } from '@/app/fonts'
import Image from 'next/image'
import { useState } from 'react'
import { MdImageNotSupported } from 'react-icons/md'

const CreditList = ({ baseImgUrl, credit, title }) => {
    const [loadCredit, setLoadCredit] = useState(false)
    const limitedCredit = !loadCredit ? credit.slice(0, 4) : credit

    return (
        <div className="h-fit rounded-3xl bg-color-secondary p-8">
            <h1
                className={`${oswald.className} mb-8 text-2xl font-medium md:text-3xl`}
            >
                {title}
            </h1>
            {credit.length !== 0 ? (
                <div className="flex flex-col gap-4">
                    {limitedCredit.map((data) => (
                        <div key={data.id} className="flex items-center gap-4">
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
                            <div>
                                <h1 className="md:text-lg">{data.name}</h1>
                                <p className="textsm text-color-white/75 md:text-base">
                                    {title == 'Casts'
                                        ? data.character
                                        : data.job}
                                </p>
                            </div>
                        </div>
                    ))}
                    {credit.length > 4 && (
                        <div className="mt-4 flex justify-center text-lg text-color-light-accent underline">
                            <button
                                onClick={() => setLoadCredit((prev) => !prev)}
                            >
                                {!loadCredit ? 'See more' : 'See Less'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p className="italic text-color-white/75">{title} not found</p>
            )}
        </div>
    )
}

export default CreditList
