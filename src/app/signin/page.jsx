import { signIn, providerMap } from '@/auth'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'

export default async function SignInPage() {
    return (
        <div className="flex h-dvh items-center justify-center bg-color-white">
            <div className="flex w-80 flex-col gap-6 rounded-xl border bg-white p-10 shadow-lg sm:w-[500px] sm:gap-8 sm:p-12">
                <Image src={'/tab-icon.svg'} alt="..." width={35} height={35} />
                <div className="-translate-y-2 sm:-translate-y-4">
                    <h1 className="text-xl font-medium text-color-primary sm:text-2xl">
                        Sign in to Movie Peek
                    </h1>
                    <p className="mt-1 text-sm text-color-primary/75 sm:text-base">
                        Join us now and get access to all our features!
                    </p>
                </div>
                <div className="w-full">
                    {Object.values(providerMap).map((provider, index) => (
                        <form
                            key={index}
                            action={async () => {
                                'use server'
                                await signIn(provider.id, { redirectTo: '/' })
                            }}
                        >
                            <button
                                type="submit"
                                className="hover: flex w-full items-center justify-center gap-2 rounded-full border border-color-primary/35 py-3 text-color-primary transition-colors hover:bg-color-primary/5"
                            >
                                <FcGoogle className="size-6 sm:size-8" />
                                <span className="sm:text-lg">
                                    Sign in with {provider.name}
                                </span>
                            </button>
                        </form>
                    ))}
                </div>
            </div>
        </div>
    )
}
